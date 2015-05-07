module.exports = function (grunt) {

    grunt.initConfig({
        less: {
            compile: {
                files: {
                    'css/style.css': 'css/style.less'
                }
            },
            yuicompress: {
                files: {
                    'css/style-min.css': 'css/style.css'
                },
                options: {
                    yuicompress: true
                }
            }
        },
        watch: {
            scripts: {
                files: ['css/*.less'],
                tasks: ['less']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['less', 'watch']);
};