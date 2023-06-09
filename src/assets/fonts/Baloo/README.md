![Baloo](http://rawgit.com/girish-dalvi/Baloo/master/Promotion/Baloo_header.jpg "Baloo")

A perfect blend of pointy paws in a coat of fur, Baloo is an affable display typeface by Ek Type. 
Available in nine Indian scripts along with a Latin counterpart, the family is Unicode compliant and libre licensed.

Baloo is a distinctive heavy spurless design with a subtle tinge of playfulness and all the bare necessities of type. 
Snuggling several scripts under a single weight, the typeface focuses on giving equal justice to every act of this gentle jungle affair to secure single and multi-script use. 
Carefree yet confident, warm yet entertaining, sprightly yet intelligible, Baloo infuses life everywhere it goes.

The Baloo project develops nine separate fonts with unique local names for each of the nine Indic Scripts. 
Each font supports one Indic subset plus Latin, Latin Extended, and Vietnamese.

- Baloo for Devanagari
- Baloo Bhai for Gujarati
- Baloo Bhaina for Odia
- Baloo Chettan for Malayalam
- Baloo Da for Bengali
- Baloo Paaji for Gurumukhi
- Baloo Tamma for Kannada
- Baloo Tammudu for Telugu
- Baloo Thambi for Tamil

Well fed and thoroughly nourished across every script, it took a team of committed type designers to rear Baloo and raise it to be the typeface we love. 
Baloo Devanagari is designed by Sarang Kulkarni, Gurmukhi by Shuchita Grover, Bangla by Noopur Datye, Oriya by Manish Minz and Shuchita Grover, Gujarati by Supriya Tembe and Noopur Datye, Kannada by Divya Kowshik, Telugu by Omkar Shende, Malayalam by Maithili Shingre and Tamil by Aadarsh Rajan. 
Baloo Latin is collaboratively designed by Ek Type. 
Type design assistance and font engineering by Girish Dalvi.

Baloo is grateful to Sulekha Rajkumar, Vaishnavi Murthy, Gangadharan Menon, Vinay Saynekar, Dave Crossland and others for their involvement, suggestions and feedback. 

### License

Baloo is licensed under the SIL Open Font License v1.1 (<http://scripts.sil.org/OFL>). 
To view the copyright and specific terms and conditions please refer to [OFL.txt](https://github.com/girish-dalvi/Baloo/blob/master/OFL.txt)

### Downloading font binaries (TTF files)

Find binary releases on <https://github.com/girish-dalvi/Baloo/releases>

### How do I install the font on my computer?

First download the font binaries (TTF files) from the [Github Releases page](https://github.com/girish-dalvi/Baloo/releases), then follow these instructions:

- [Windows](http://windows.microsoft.com/en-us/windows-vista/install-or-uninstall-fonts)
- [GNU/Linux](http://lmgtfy.com/?q=how+to+install+fonts+in+linux)
- [Mac OS X](http://support.apple.com/kb/HT2509)


### Getting Involved

Would you like to contribute to the development of this font? Here is how **you** can help:

1. Tell us about any bugs you find, or enhancements you would like to see

2. Contribute directly to the fonts. In this repository we provide the complete set of source files that we use ourselves to develop the fonts. If you with to contribute directly, please see below how we build the fonts and follow our build process so that we can easily include your contribution, and follow the Github pull request process to send your contribution. 

### Bug Reports

Send us bug reports, feature enhancements or glyph requests, using the [Github Issue Tracker](https://github.com/girish-dalvi/Baloo/issues/). 

Here are a few tips:

- Bugs must be isolated and reproducible problems that we can fix. This means telling us step by step how we can produce the bug.

- Share as much information as possible. Include your operating system and its version, what application(s) you found the problem with and their version, etc. 

## Building the font from source
   
This requires the following programs:

- **[Fontlab Studio](http://www.fontlab.com/font-editor/fontlab-studio/):** `.vfb` design files are used by this font editor, for Windows and Mac from the Fontlab company with a proprietary license and requiring a license fee from each user. 

- **[AFDKO](http://www.adobe.com/devnet/opentype/afdko.html):** A set of command line tools for generating OpenType fonts from Adobe

The build process used by Ek Type is as follows:

1. Make changes in FontLab `.vfb` file

2. Generate the `.ttf` file

3. Make changes in AFDKO feature files. 

4. Type the following commands in the Command prompt window. Make sure that the AFDKO directory is included in your path.

Use `maketof -h` to view the options available to you; choose the options you want as per your needs. To generate the release version of the font we generally use

    makeotf -f Baloo.ttf -o Baloo.otf -r -S -rev

### Branches and Pull Requests

To learn more about Pull Requests, see Github's great article on [using pull requests](https://help.github.com/articles/using-pull-requests) and play the [interactive learning game](http://try.github.com) that takes around 15 minutes to complete.

- `master` is the latest, stable, tested version 

- Add your name to the contributors file

- Explain in the pull request how you have tested your contribution
