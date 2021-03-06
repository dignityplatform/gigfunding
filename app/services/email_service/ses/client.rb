module EmailService::SES
  module DataTypes
    Config = EntityUtils.define_builder(
      [:region, :mandatory, :string],
      [:access_key_id, :mandatory, :string],
      [:secret_access_key, :mandatory, :string],
      [:sns_topic, :mandatory, :string])

    NotificationTopic = EntityUtils.define_builder(
      [:email, :mandatory, :string],
      [:type, one_of: [:bounce, :complaint]])
  end

  class Client
    attr_reader :ses

    def initialize(config:, stubs: nil, logger: EmailService::SES::Logger.new)
      config = DataTypes::Config.build(config)

      @ses = if stubs.blank?
        Aws::SES::Client.new(config.except(:sns_topic))
      else
        Aws::SES::Client.new(config.except(:sns_topic).merge(stub_responses: stubs))
      end

      @sns_topic = config[:sns_topic]
      @logger = logger
    end

    def get_identity_verification_attributes(emails:)
      log_request_response(:get_identity_verification_attributes, nil) do

          response = @ses.get_identity_verification_attributes(identities: emails)
          if response.successful?
            Result::Success.new(response.to_h[:verification_attributes])
          else
            Result::Error.new(response.error)
          end
      rescue StandardError => e
          Result::Error.new(e)

      end
    end

    # Request verification for the given email address. If called
    # twice with the same address resends the verification email.
    def verify_address(email:)
      if email.blank?
        raise ArgumentError.new("Missing mandatory value for email parameter.")
      end

      log_request_response(:verify_email_identity, {email_address: email}) do

          response = @ses.verify_email_identity(email_address: email)
          if response.successful?
            Result::Success.new()
          else
            Result::Error.new(response.error)
          end
      rescue StandardError => e
          Result::Error.new(e)

      end
    end

    def set_notification_topic(email:, type:)
      unless @sns_topic
        raise ArgumentError.new("@sns_topic must be set")
      end

      nt = DataTypes::NotificationTopic.call({email: email, type: type})
      method_params = {identity: nt[:email],
                       notification_type: nt[:type].to_s.capitalize,
                       sns_topic: @sns_topic}

      log_request_response(:set_identity_notification_topic, method_params) do

          response = @ses.set_identity_notification_topic(method_params)

          if response.successful?
            Result::Success.new()
          else
            Result::Error.new(response.error)
          end
      rescue StandardError => e
          Result::Error.new(e)

      end
    end

    def disable_email_forwarding(email:)
      if email.blank?
        raise ArgumentError.new("Missing mandatory value for email parameter.")
      end

      method_params = {identity: email, forwarding_enabled: false}

      log_request_response(:set_identity_feedback_forwarding_enabled, method_params) do

          response = @ses.set_identity_feedback_forwarding_enabled(method_params)
          if response.successful?
            Result::Success.new()
          else
            Result::Error.new(response.error)
          end
      rescue StandardError => e
          Result::Error.new(e)

      end

    end


    private

    def log_request_response(method, params, &block)
      request_id = @logger.log_request(method, params)

      response = block.yield

      @logger.log_result(response, method, request_id)
      response
    end

  end
end
