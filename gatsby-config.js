module.exports = {
  plugins: [
    'gatsby-plugin-top-layout',
    {
      resolve: 'gatsby-plugin-material-ui',
      // If you want to use styled components you should change the injection order.
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'GatsbyJS',
        short_name: 'GatsbyJS',
        start_url: '/',
        background_color: '#6b37bf',
        theme_color: '#6b37bf',
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone',
        icon: 'src/assets/icon.png' // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
      }
    },
    'gatsby-plugin-offline',
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet'
  ],
  siteMetadata: {
    resume: {
      about: {
        name: 'Ben Rohald',
        title: 'Mathematician, Computer Scientist & Coding Wizard.',
        summary: 'Ambitious and motivated 5th year Software Engineering and Mathematics student, driven by a passion for technology and application software. Experienced junior developer with a rare combination of quantitative skills and creative insights. As you can tell, I like making websites.'
      },
      education: [
        {
          degree: 'Software Engineering (Hons) and Statistics (BE (Hons) BSc)',
          dateRange: '2014 - 2019',
          school: 'University of New South Wales'
        },
        {
          degree: 'Software Engineering (Hons) and Statistics (BE (Hons) BSc)',
          dateRange: 'Sep 2016 – Dec 2016',
          school: 'University of California San Diego, Exchange Program'
        }
      ],
      experience: [
        {
          title: 'Software Engineering Intern, Optiver APAC',
          dateRange: 'Nov 2018 – Feb 2019',
          summary: 'Extended a core window of the main internal trading application (.NET, C#), performed big data analysis on trade execution, speed and success (Pandas, Python) and implemented autonomous, real-time trading software (C++).'
        },
        {
          title: 'React Full Stack Web Developer, Contractor',
          dateRange: 'Feb 2018 – Mar 2018',
          summary: 'Contracted by What’s-On Sydney to develop a review platform for local events. Built in React 16, the site uses the Contentful CMS and is exclusively client-side. Server-side functionality utilizes Firebase’s remote cloud functions.'
        },
        {
          title: 'React Full Stack Web Developer Intern, Metigy',
          dateRange: 'Nov 2017 – Feb 2018',
          summary: 'Responsible for the React implementation of the Metigy responsive analytics platform. Data and metrics needed to be parsed through a range of complex formatters before being interfaced through HighCharts graphs.'
        },
        {
          title: 'Ruby on Rails Backend Developer, Contractor',
          dateRange: 'Feb 2017 – Jun 2017',
          summary: 'Contracted as a freelance back-end developer by The Observership to implement a website remodel. Technologies include payment gateways (Stripe and PayPal), AWS S3 storage and Salesforce CRM integration.'
        },
        {
          title: 'Junior Software Engineer, Brieff',
          dateRange: 'Mar 2016 – Jul 2016',
          summary: 'Employed as a front-end engineer to build custom interfaces and integrate with a Ruby on Rails backend.'
        }
      ],
      skills: [
        {
          title: 'Data Structures / Algorithms',
          summary: 'HD university level experience'
        },
        {
          title: 'C, C++',
          summary: 'Extensive experience with low level programming'
        },
        {
          title: 'Java, C#, Ruby, Python',
          summary: 'OO development and design pattern skills'
        },
        {
          title: 'R, SQL',
          summary: 'Database and statistical analysis'
        },
        {
          title: 'Linux, Shell, Bash, Perl',
          summary: 'Scripting and command line'
        },
        {
          title: 'ES6, React, Vue',
          summary: 'Front end'
        },
        {
          title: 'Flask, Node, Rails',
          summary: 'Back end'
        }
      ],
      connect: [
        'https://www.linkedin.com/in/benjaminrohald/',
        'https://medium.com/@rohaldb',
        'https://github.com/rohaldbUni',
        'mailto:rohaldb@gmail.com'
      ]
    }
  }
}
