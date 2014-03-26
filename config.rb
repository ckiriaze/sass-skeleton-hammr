# Require any additional compass plugins here.
require 'autoprefixer-rails'
require 'csso'
on_stylesheet_saved do |file|
  css = File.read(file)
  File.open(file, 'w') do |io|
    io << Csso.optimize( AutoprefixerRails.compile(css) )
  end
end


# Import many sass or scss files in a single import statement. @import "mixins/*"
# require 'sass-globbing'


# Set this to the root of your project when deployed:
http_path       = "/"
css_dir         = "assets/css"
sass_dir        = "assets/sass"
images_dir      = "assets/images"
javascripts_dir = "assets/js"
fonts_dir       = "assets/fonts"


# You can select your preferred output style here (can be overridden via the command line):
#output_style = :expanded or :nested or :compact or :compressed
output_style = :compressed

# To enable relative paths to assets via compass helper functions. Uncomment:
relative_assets = true

cache_dir = ".sass-cache"

# To disable debugging comments that display the original location of your selectors. Uncomment:
line_comments = false