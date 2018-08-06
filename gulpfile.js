var gulp = require('gulp');

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
        done(); // signals async completion with callback function
});