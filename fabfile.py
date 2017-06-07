import os
import random
from fabric.api import env, local, run, sudo, put, settings
from fabric.contrib.files import append, exists, sed

main_dir = '/home3/caedroco/public_html/estudiocaribe'

def deploy():
    _clear_previous_files()
    _upload_files()

def _clear_previous_files():
    with settings(warn_only=True):
        run(f'cd {main_dir}'
            ' && rm index.html'
            ' && rm main.bundle.js'
            ' && rm polyfills.bundle.js'
            ' && rm vendor.bundle.js'
            ' && rm styles.bundle.css'
            ' && rm -r assets')

def _upload_files():
    jsfiles = ('inline', 'polyfills', 'vendor', 'main',)
    with settings(warn_only=True):
        check = local('ls dist')
    if check.failed:
        local('cd ~/Documents/ec-front && ng build --prod')
    local(r"mkdir -p distribution")
    local(r"""sed 's:</script><script:</script>\n<script:g' dist/index.html > distribution/index.html""")
    for jsfile in jsfiles:
        local(f"sed -i 's/{jsfile}.*.bundle.js/{jsfile}.bundle.js/g' "
            ' distribution/index.html')
    local("sed -i 's/styles.*.bundle.css/styles.bundle.css/g'"
        ' distribution/index.html')
    put('distribution/index.html', f'{main_dir}/index.html')
    put('dist/main*.js', f'{main_dir}/main.bundle.js')
    put('dist/polyfills*.js', f'{main_dir}/polyfills.bundle.js')
    put('dist/inline*.js', f'{main_dir}/inline.bundle.js')
    put('dist/vendor*.js', f'{main_dir}/vendor.bundle.js')
    put('dist/styles*.css', f'{main_dir}/styles.bundle.css')
    run(f'mkdir -p {main_dir}/assets')
    run(f'mkdir -p {main_dir}/assets/css')
    run(f'mkdir -p {main_dir}/assets/img')
    run(f'mkdir -p {main_dir}/assets/misc')
    put('dist/assets/css', f'{main_dir}/assets')
    put('dist/assets/img', f'{main_dir}/assets')
    put('dist/assets/misc', f'{main_dir}/assets')
    local('rm -r distribution')

# convert styles.bundle.css into readable format with the sed chain below
#sed 's/{/ {\n    /g' dist/styles.bundle.css | sed 's/;/;\n    /g' | sed 's/}/\n}\n\n/g' | sed 's/:/: /g' build --prod')
