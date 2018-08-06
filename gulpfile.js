var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
/*
    -- TOP LEVEL FUNCTIONS --
    gulp.task - Define tasks
    gulp.src - Point to files to use
    gulp.dest - Points to folder to output
    gulp.watch - Watch files and folders for changes
*/

//Logs Message
gulp.task('message', function(){
    return console.log('Gulp is Running...')
});

//Copy all html files
gulp.task('copyHtml', function(done){
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
        done(); // signals async completion with callback function -> solution found at https://stackoverflow.com/questions/36897877/gulp-error-the-following-tasks-did-not-complete-did-you-forget-to-signal-async
});

// Optimise images
gulp.task('imageMin', () =>
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);

//Minify JS
gulp.task('minify', function(done){
        gulp.src('src/js/*.js')
            .pipe(uglify())
            .pipe(gulp.dest('dist/js'));
            done();
});

//Compile SASS
gulp.task('sass', function(done){
    gulp.src('src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
        done();
});
