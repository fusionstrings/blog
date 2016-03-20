import gulp from 'gulp';
import {create} from 'browser-sync';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();
const {init, reload} = create();

const paths = {
	templates: 'app/templates/**/*.html',
	templateDirs: ['app/templates']
}

// gulp.task('serve', () => {
// 	init({
// 		server: './'
// 	});
// 	gulp.watch("app/**/*.*", reload);
// })

//gulp.task(serve);
//gulp.task(watch);


gulp.task('start', gulp.series(templates, gulp.parallel(serve, watch)));
//gulp.task(watch);

function serve(){
	init({
		server: './',
		logPrefix: 'PF'
	});
}

function templates(){
	console.log('templates');
	return gulp.src(paths.templates)
		.pipe($.nunjucksHtml({
			searchPaths: paths.templateDirs
		}))
		.pipe(gulp.dest('dist'));
}
	
function watch(){	
	console.log('watch');
	gulp.watch(paths.templates, templates);
}