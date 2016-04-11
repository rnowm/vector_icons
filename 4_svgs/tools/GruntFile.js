module.exports = function(grunt) {
  grunt.initConfig({
    connect: {
      main: {
        options: {
          base: '../',
          port: 8001,
          hostname: '0.0.0.0'
        }
      }
    },

    svg_sprite: {
  		basic: {
  			expand: true,
  			cwd: '../images/',
        src: ['*.svg'],
  			dest: '',

  			options: {
  				mode: {
            symbol: {
                dest: '../images/',
                sprite: 'sprite.svg',
                inline: false,
                render: {
                    less: false
                },
                bust: false,
                example: true
            }
  				}
  			}
  		}
  	},

    watch: {
      options: {
        livereload: true
      }
    },
  });

  grunt.loadNpmTasks('grunt-svg-sprite');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', [
    'svg_sprite',
    'connect',
    'watch'
  ]);

};
