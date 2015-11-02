var prefix = [
    '(function (root) {'
].join('\n');
var suffix = [
    '   root.oculus = {',
    '      Create: function(obj){',
    '          return new OculusRepeat(obj)',
    '      }',
    '   }',
    '}(this));'
].join('\n');

module.exports = function (grunt) {
    require("load-grunt-tasks")(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner: [
            '/*',
            '   Oculus (v<%= pkg.version %>)',
            '   Author: <%= pkg.author %>',
            '   Github: https://github.com/sagea',
            '*/\n'
        ].join('\n'),
        jshint: {
            options: {
                reporter: require('jshint-stylish'),
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
                esnext: true
            },
            src: ['src/oculus.js']
        },
        copy: {
            main: {
                src: 'src/oculus.js',
                dest: 'dist/oculus.js',
                options: {
                    process: function (content, srcpath) {
                        //console.log('<%= banner =>')
                        return grunt.config.get('banner') + content;
                    }
                }
            }
        },
        uglify: {
            options: {
                compress: {
                    drop_console: true
                },
                banner: '<%= banner %>'
            },
            minify: {
                files: {
                    'dist/oculus.min.js': ['dist/oculus.js']
                }
            }
        },
        watch: {
            src: {
                files: 'src/oculus.js',
                tasks: ['b']
            }
        },
        babel: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    "dist/oculus.js": "src/oculus.es6.js"
                }
            }
        },
        wrap: {
            basic: {
                src: ['dist/oculus.js'],
                dest: 'dist/oculus.js',
                options: {
                    wrapper: [prefix, suffix]
                }
            }
        }
    });

    // Watch
    grunt.registerTask('w', ['watch']);

    // Build
    grunt.registerTask('b', ['jshint:src', 'babel', 'wrap', 'uglify:minify']);

    // Test
    grunt.registerTask('test', []);
};