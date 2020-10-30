var gulp = require('gulp'), // Подключаем Gulp
    sass = require('gulp-sass'); // Подключаем Sass пакет
    browserSync = require('browser-sync'); // Подключаем Browser Sync

gulp.task('sass', function() { // Создаем таск "sass"
  return gulp.src(['build/sass/**/*.sass', 'build/sass/**/*.scss']) // Берем источник
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) // Преобразуем Sass в CSS посредством gulp-sass
    .pipe(gulp.dest('build/css')) // Выгружаем результата в папку css
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'build' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('watch', ['sass', 'browser-sync'], function() {
    gulp.watch('build/sass/**/*.sass', ['sass']); // Наблюдение за sass файлами в папке sass
    gulp.watch('build/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    gulp.watch(['build/js/index.js', 'build/libs/**/*.js'], browserSync.reload); // Наблюдение за главным JS файлом и за библиотеками
});

gulp.task('default', ['watch']);