

class: center, middle

# Advanced DevTools: Compass, Grunt, Livereload

---
class: middle
## Инструкция по прикрутке Sass к студийному проекту 

___github.com/artlebedev/solutions/tree/master/sass___

1. [Скопировать файл `als.scss`]
2. Завести в структуре проекта отдельный каталог `data/css-compressor`
3. Скопировать файл `sass-extension.rb` в каталог `data/css-compressor`
4. Добавить в `.gitignore` каталог `.sass-cache`
5. Скопировать файл `sass-dev.py` в каталог `data/css-compressor`
6. Создать файл `www/_sass.html`
7. Добавить в `.htaccess` rewrite
8. Создать файл `exec/sass.cmd` или `exec/sass.sh`
9. [Перезагрузить Windows]


---
class: middle

# Технология

Запрос направляется веб-сервером по следующему алгоритму

- `www/.htacess`: происходит rewrite c `_doc.html` к `_sass.html`
- `www/_sass.html`: скрипт на парсере определяет среду, ОС, тип ответа и запускается скрипт на баше
- `exec/sass.cmd` | `exec/sass.sh`: запускается скрипт на питоне
- `data/css-compressor/sass-dev.py | data/css-compressor/sass-production.py`: запускается скрипт на руби
- `data/css-compressor/sass-extension.rb`: scss компилируется в css и возвращается в парсер

---
class: middle

- __Компиляция SASS запускается веб-сервером__
- Оригинальность
- Широта кругозора
- ___Архитектурные изыски___

![Лестица Эшера](esher-stairs.jpg)

---
class: middle

# The SASS way

Getting started with Sass and Compass 

___http://thesassway.com/beginner/getting-started-with-sass-and-compass___

---
class: middle

1. Установить compass и CSS Parser `gem install compass css_parser`
2. Создать файл с конфигом `touch config.rb`
```ruby
require 'compass/import-once/activate'
http_path = "/"
css_dir = "stylesheets"
sass_dir = "sass"
images_dir = "images"
javascripts_dir = "javascripts"
```
3. Добавить в `.gitignore` каталог `.sass-cache`
4. Запустить watcher в директории с файлом `config.rb`

---
class:middle

# Технология


---
advanced dev tools: 

compass, grunt, livereload


1) compass

1.1) solutions
оригинальность и архитектурные изыски, 
компиляция sass веб сервером

1.2) compass way
фукциональность и стандартизация
gem install compass
compass new als
config.rb
компиляция sass на локальной машине
сборка спрайта
source maps
compass watch


2) grunt 

2.1) grunt-contrib-watch
source maps
#livereload

2.2) grunt-contrib-sass vs grunt-sass

2.3) grunt-spritesmith
namespace for icons

2.4) custom task 'grunt-libsass'
cp -r node_modules/grunt-sass custom_node_modules/grunt-libsass
use bourbon 3.2 instead of compass

2.5) 'grunt install'
use grunt to ru. node scripts
run node function in task to execute
npm install in the custom_node_modules directory

2.6) use node scripts to run grunt
 run grunt from node script
use grunt.js to run gruntfile from the exec/build directory

2.7) grunt.config.set
set customized watch task from other task

2.8) grunt-contrib-less
use prefixed less-hat with bootstrap

3) livereload

3.1) grunt-contrib-watch
reload css, js

3.2) use livereload for static project
grunt-parallel + grunt-express
server.js with connect.static


4) setup dev tools on imprimatur using nodejs and npm







































    