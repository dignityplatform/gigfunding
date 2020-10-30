require "timeout"

# http://www.elabs.se/blog/53-why-wait_until-was-removed-from-capybara

module WaitSteps
  extend RSpec::Matchers::DSL

  matcher :become_true do
    match do |block|

        Timeout.timeout(Capybara.default_max_wait_time) do
          sleep(0.05) until value = block.call
          value
        end
    rescue TimeoutError
        false

    end

    supports_block_expectations
  end
end

World(WaitSteps)
