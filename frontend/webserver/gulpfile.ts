"use strict"

const gulp = require("gulp"),
    del = require('del'),
    tsc = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    tsProject = tsc.createProject('tsconfig.json'),
    tsLint = require('gulp-tslint'),
    concat = require('gulp-concat'),
    runSequence = require('run-sequence').use(gulp),
    nodemon = require('gulp-nodemon'),
    gulpTypings = require('gulp-typings');

/**
 * Remove build directory
 **/
gulp.task('clean',(cb:any) => {
    return del(['build'],cb);
});

/**
 *  Build express server
 * **/

gulp.task('build:server', function() {
    let tsProject = tsc.createProject('server/tsconfig.json');
    let tsResult = gulp.src('server/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(tsProject());
    return tsResult.js
      //  .pipe(concat('server.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build'));
});

gulp.task('build:client', function() {
    let tsProject = tsc.createProject('client/tsconfig.json');
    let tsResult = gulp.src('client/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(tsProject());
    return tsResult.js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build'));
});

/**
 * Lint all custom Typescript files
 * **/
gulp.task('tslint', () => {
    return gulp.src("client/app/**/*.ts")
        .pipe(tsLint())
        .pipe(tsLint.report('prose'));
});

/**
 * Compile Typescript sources and create sourcemaps in build directory
 */
gulp.task('compile', ['tslint'], () => {
    let tsResult = gulp.src("client/**/*.ts")
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject));
    return tsResult.js
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("build"));
});

/**
 * Copy all resources that are not TypeScript files into build directory.
 * */
gulp.task("resources", () => {
    return gulp.src(["client/**/*", "!**/*.ts"])
        .pipe(gulp.dest("build"));
});

/**
 * Copy all required libraries into build directory.
 * */
gulp.task("libs", () => {
    return gulp.src([
        'core-js/client/shim.min.js*',
        'zone.js/dist/zone.js*',
        'reflect-metadata/Reflect.js*',
        'systemjs/dist/system.src.js*'
    ], {cwd: "node_modules/**"})
        .pipe(gulp.dest("build/libs"));
});

/**
 * Copy all required libraries into build directory.
 * */
gulp.task("node_modules", () => {
    return gulp.src([
        'node_modules/*'
    ], {cwd: "."})
        .pipe(gulp.dest("build/node_modules"));
});

/**
 * Watch for changes in TypeScript, HTML and CSS files
 * */
gulp.task('watch', function () {
    gulp.watch(["client/**/*.ts"], ['compile'])
        .on('change', function (e: any) {
            console.log('TypeScript file ' + e.path + ' has been changed. Compiling.');
        });
    gulp.watch(["client/**/*.html", "client/**/*.css"], ["resources"])
        .on('change', function (e: any) {
            console.log('Resource file '+ e.path + ' has been changed. Updating.');
        });
});

/**
 * Install typings for server and client.
 * */
gulp.task('installTypings', function () {
    let stream = gulp.src(["./server/typings.json", "./client/typings.json","typings.json"])
        .pipe(gulpTypings(null));
    return stream;
});

/**
 * Start the express server with nodemon
 * */
gulp.task('start', function () {
    nodemon({
        script: 'build/server.js',
        ext: 'html js',
        task: ['tslint']
    })
        .on('restart', function () {
            console.log('restarted');
        });
});

/**
 * Build the project.
 * 1. Clean the build directory
 * 2. Build Express server
 * 3. Build the Angular app
 * 4. Copy the resources
 * 5. Copy the dependencies.
 * */

gulp.task('build', function (callback: any) {
    runSequence('clean', 'build:server', 'build:client', 'resources', 'libs','node_modules', callback);
});
