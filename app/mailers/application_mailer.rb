class ApplicationMailer < ActionMailer::Base
  default from: 'aachourasiya@bestpeers.com'
  layout 'mailer'

def send_it(email)
  @email = email

  mail(
    from: email.user.email,
    to: current_user.seller.email,
    subject: email.subject
  )
  end
end
