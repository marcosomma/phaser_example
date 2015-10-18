module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 8080,
                    base: './deploy'
                }
            }
        },
        concat: {
            dist: {
                src: [  "src/lib/**/*.min.js",
                    "src/game/**/*.min.js"
                ],
                dest: 'deploy/js/game.min.js'
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            main: {
                files: {
                    'src/game/main.min.js': ["/game/main.js"]
                }
            },
            core: {
                files: {
                    'deploy/js/core/Boot.min.js': ["src/game/core/Boot.js"],
                    'deploy/js/core/Game.min.js': ["src/game/core/Game.js"],
                    'deploy/js/core/Howto.min.js': ["src/game/core/Howto.js"],
                    'deploy/js/core/MainMenu.min.js': ["src/game/core/MainMenu.js"],
                    'deploy/js/core/Preloader.min.js': ["src/game/core/Preloader.js"]
                }
            }
        },
        copy: {
            assets: {
                expand: true,
                filter: 'isFile',
                flatten: true,
                src: 'src/game/assets/**/*.**',
                dest: 'deploy/assets/'
            }
        },
        watch: {
            files: 'src/**/*.js',
            tasks: ['concat']
        },
        open: {
            dev: {
                path: 'http://localhost:8080/index.html'
            }
        }
    });

    grunt.registerTask('default', ['uglify:main', 'concat', 'uglify:core', 'connect', 'copy', 'open', 'watch']);

};