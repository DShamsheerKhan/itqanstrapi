module.exports = ({env}) => ({
  email: {
    config: {
      provider: '@strapi/provider-email-mailgun',
      providerOptions: {
        key: env('MAILGUN_API_KEY', '1181d9cb58c0b7a5907e48572ec83229-32a0fef1-66fee221'),
        domain: env('MAILGUN_DOMAIN', 'mg.hostylus.com'),
        url: env('MAILGUN_URL', 'https://api.mailgun.net'), // Optional
        
      },
      settings: {
        defaultFrom: 'info@itqancapital.com',
        defaultReplyTo: 'info@itqancapital.com',
        testAddress: 'a93153296@gmail.com', // Added for testing
      },
    },
  },
  i18n: {
    enabled: true,
  },
  'import-export-entries': {
    enabled: true,
   config: {
      serverPublicHostname: env('SERVER_PUBLIC_HOSTNAME', 'https://incredible-dogs-ab93ee15f7.strapiapp.com/'), // adjust this to your server's hostname
    },
  },
});
