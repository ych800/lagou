/** 
	gulp 插件：
	"gulp": "^3.9.1",              //包管理
    "gulp-clean": "^0.3.2",        //清除
    "gulp-concat": "^2.6.1",       //合并js 文件
    "gulp-connect": "^5.0.0",      //server connect
    "gulp-cssmin": "^0.2.0",       //css压缩
    "gulp-imagemin": "^4.0.0",     //image图片压缩
    "gulp-less": "^3.3.2",         //less编译
    "gulp-load-plugins": "^1.5.0", //插件管理
    "gulp-uglify": "^3.0.0",       //文件压缩
    "open": "^0.0.5"               //打开服务
**/
	
/*引入模块*/
var gulp = require ('gulp');
var $ = require('gulp-load-plugins')();
var open = require('open');

//文件路径
var app = {
	prodPath:'dist/',
	srcPath:'src/',
	devPath:'build/'
}

//定义gulp(lib,html,css,js,image)任务
gulp.task('lib',function(){
	gulp.src('bower_components/**/*.js')
	.pipe(gulp.dest(app.devPath + 'vender'))
	.pipe(gulp.dest(app.prodPath + 'vender'))
	.pipe($.connect.reload());

});

//处理html文件
gulp.task('html',function(){
	gulp.src(app.srcPath+'**/*.html')
	.pipe(gulp.dest(app.devPath))
	.pipe(gulp.dest(app.prodPath))
	.pipe($.connect.reload());
});
//json 
gulp.task('json',function(){
	gulp.src(app.srcPath + 'data/**/*.json')
	.pipe(gulp.dest(app.devPath + 'data'))
	.pipe(gulp.dest(app.prodPath + 'data'))
	.pipe($.connect.reload());

});

//less
gulp.task('less',function(){
	gulp.src(app.srcPath + 'style/index.less')
	.pipe($.less())
	.pipe(gulp.dest(app.devPath+'css'))
	.pipe($.cssmin())
	.pipe(gulp.dest(app.prodPath +'css'))
	.pipe($.connect.reload());
})
//js
gulp.task('js',function(){
	gulp.src(app.srcPath+'script/**/*.js')
	.pipe($.concat('index.js'))
	.pipe(gulp.dest(app.devPath +'js'))
	.pipe($.uglify())
	.pipe(gulp.dest(app.prodPath +'js'))
	.pipe($.connect.reload());
})
//image
gulp.task('image',function(){
	gulp.src(app.srcPath + 'image/**/*')
	.pipe(gulp.dest(app.devPath +'image'))
	.pipe($.imagemin())
	.pipe(gulp.dest(app.prodPath + 'image'))
	.pipe($.connect.reload());
})
//
gulp.task('clean',function(){
	gulp.src([app.devPath,app.prodPath])
	.pipe($.clean());
})

gulp.task('build',['lib','less','js','html','image','json']);


gulp.task('server',['build'],function(){
	$.connect.server({
		root:[app.devPath],
		livereload:true,
		port:'8000'
	});
	open('http://localhost:8000');

	gulp.watch('bower_components/**/*.js',['js']);
	gulp.watch(app.srcPath + 'script/**/*.js',['js']);
	gulp.watch(app.srcPath + 'style/**/*.less',['less']);
	gulp.watch(app.srcPath + 'image/**/*',['image']);
	gulp.watch(app.srcPath + 'data/**/*.json',['json']);
	gulp.watch(app.srcPath + '**/*.html',['html']);

})

gulp.task('default',['server']);

