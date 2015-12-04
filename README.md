Visit the demo site.
http://nicktodd2.github.io



BPG Animations
=========================

Experiments with the .bpg image encoding and decoding workflow



##Homebrew Installation Instructions

for osx use libbpg in homebrew

```
brew install libbpg
```

###To encode a BPG
navigate to your homebrew bpg installation folder

Probably this

```
/usr/local/Cellar/libbpg/0.9.6/bin
```

inside you will find:
![bin](images/bin.png "bin")

have an image sequence ready to convert to an animated .bpg
I have 240 frames of my civic image sequence in the folder here:
![bin with civic](images/CivicBin.png "bin")

in the terminal cd to your bin and use the following command to turn the frames into an animation:
```
/bpgenc -a civicR/civicR_%3d.png -fps 25 -loop 0 -o civic800
```

you would get civic800.bpg in the bin
![bin with civic](images/bpg.png "bin")

###Main options:
```
usage: bpgenc [options] infile.[jpg|png]


-h                   show the full help (including the advanced options)
-o outfile           set output filename (default = out.bpg)
-q qp                set quantizer parameter (smaller gives better quality,
                     range: 0-51, default = 29)
-f cfmt              set the preferred chroma format (420, 422, 444,
                     default=420)
-c color_space       set the preferred color space (ycbcr, rgb, ycgco,
                     ycbcr_bt709, ycbcr_bt2020, default=ycbcr)
-b bit_depth         set the bit depth (8 to 12, default = 8)
-lossless            enable lossless mode
-e encoder           select the HEVC encoder (x265, default = x265)
-m level             select the compression level (1=fast, 9=slow, default = 8)

Animation options:
-a                   generate animations from a sequence of images. Use %d or
                     %Nd (N = number of digits) in the filename to specify the
                     image index, starting from 0 or 1.
-fps N               set the frame rate (default = 25)
-loop N              set the number of times the animation is played. 0 means
                     infinite (default = 0)
-delayfile file      text file containing one number per image giving the
                     display delay per image in centiseconds.
```

####Full options
```
The BPG command line encoder is 'bpgenc'. It takes JPEG or PNG images
as input.

- Speed: by default bpgenc uses the x265. You can compile the much
  slower but more efficient JCTVC encoder and select it with the '-e
  jctvc' option. With x265 you can select the encoding speed with the
  '-m' option (1 = fast, but larger image, 9 = slower but smaller
  image).

- Bit depth: the default bit depth is 8. You can increase it to 10
  ('-b 10' option) to slightly increase the compression ratio. For web
  publishing it is generally not a good idea because the Javascript
  decoder uses more memory. The compiled x265 encoder supports the bit
  depth of 8, 10 and 12. The slower JCTVC encoder can be compiled to
  support higher bit depths (up to 14) by enabling the Makefile
  define: USE_JCTVC_HIGH_BIT_DEPTH.

- Lossless compression is supported as a bonus thru the HEVC lossless
  capabilities. Use a PNG input in this case unless you know what you
  do ! In case of a JPEG input, the compression is lossless related to
  the JPEG YCbCr data, not the RGB data. In any case, the bit depth
  should match the one of your picture otherwise the file size
  increases a lot. By default the lossless mode sets the bit depth to
  8 bits. The prefered color space is set to "rgb". Notes:

    - lossless mode is less tested that the lossy mode but it usually
      gives better results that PNG on photographic images.

    - the JCTVC encoder gives smaller images than the x265 encoder
      with lossless compression.

- There is a small difference of interpretation of the quantizer
  parameter (-q option) between the x265 and JCTVC encoder.

- Color space and chroma format:

    * For JPEG input, the color space of the input image is not
      modified (it is YCbCr, RGB, YCbCrK or CMYK). The chroma is
      subsampled according to the preferred chroma format ('-f'
      option).

    * For PNG input, the input image is converted to the preferred
      color space ('-c' option). Its chroma is then subsampled
      according to the preferred chroma format.

    * grayscale images are kept unmodified.

- Premultiplied alpha: by default bpgenc uses non-premultiplied alpha
  to preserve the color components. However, premultiplied alpha
  ('-premul' option) usually gives a better compression at the expense
  of a loss in the color components. This loss is not an issue if the
  image is not edited.
```


#####Official information on the .bpg format and where to download the .js decoder
http://bellard.org/bpg/



Really Promising Resources for Inline Video on iOS Safari
=========================
http://blog.webmatters.it/2012/09/canvas-rocks-video-sucks/
https://github.com/sublimehq/anim_encoder
https://docs.google.com/document/pub?id=1GWTMLjqQsQS45FWwqNG9ztQTdGF48hQYpjQHR_d1WsI

Almost Turnkey Inline Video on iOS Safari
=========================
http://codepen.io/newshorts/pen/yNxNKR

http://www.easy-bits.com/iphone-inline-video-autostart
