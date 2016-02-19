module.exports = function(grunt) {
    // 配置
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        config: { static_dest: 'public/' },
        // 合并
        cssmin: {
            compress: {
                files: {
                    '<%= config.static_dest %>css/dest/globalMain.css': ['<%= config.static_dest %>css/src/*.css']
                }
            }
        },
        // 合并
        concat: {          
            options: {
                separator: ';'
            },
            dist: {
               src: ['<%= config.static_dest %>js/src/*.js'],
               dest: '<%= config.static_dest %>js/dest/libs.js'  
            }   
        },
        // 压缩
        uglify: {
            options : {
                banner : '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build : {
                src : '<%= config.static_dest %>js/dest/*.js',
                dest : '<%= config.static_dest %>js/dest/echarts-all.js'
            }
        },
        // 文件指纹
        rev: {
            options: {
                    encoding: 'utf8',
                    algorithm: 'md5',
                    length: 8
                },
                assets: {
                    files: [{
                        src: [
                            '<%= config.static_dest %>css/dest/*.css',
                            '<%= config.static_dest %>js/dest/*.js'
                        ]
                    }]
                }
        },
        // 清除
        clean: {
            dist: {
                src: [ '<%= config.static_dest %>css/dest/*.css',
                       '<%= config.static_dest %>js/dest/*.js'
                     ]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-rev');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask('default', ['cssmin', 'concat', 'uglify','rev','clean']);
};