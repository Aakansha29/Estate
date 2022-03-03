class UserMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.user_mailer.post_created.subject
  #
  def post_created
    @user = params[:user]
    @greeting = "Hi"
    @property = params[:property]
   attachments['r1.jpg'] = File.read('app/assets/images/r1.jpg')
   mail to: @property&.user&.email,
    # cc: User.all.pluck(:email),
    bcc: User.last.email,
    subject: "Interested"
  end
end
