module.exports = ({ env }) => ({



    ezforms:{
      config:{
        captchaProvider: {
          name: 'none',
          // config: {
          //   secretKey: '6Lczec8fAAAAANwmMZ6nUWOC7PlMQCnNGxhniCRU',
          //   minimumScore: 0.5
          // }
        },
        notificationProviders: [
          {
            name: 'email',
            enabled: true,
            config: {
              from: 'emindemirhan@icloud.com'
            }
          },
          {
            provider: 'twilio',
            enabled: true,
            config: {
              accountSid: '',
              authToken: '',
              from: '',
            }
          }
        ]
      }
  }
  
  });
  
  