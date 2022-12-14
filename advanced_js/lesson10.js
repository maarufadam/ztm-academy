// Flat
const jurassicPark = [['ð','ðĶ'],'ðĶ','ð·ïļ',['ðĶ','ðĒ',['ð'],['ðĶ'],['ðĶ'],'ðĶ',['ð'],['ðĶ'],'ðĶ',['ðĶ'],['ðĶ'],['ðĄ','ð ','ð','ðŽ','ðģ','ð','ðĶ'],'ð',['ð','ð'],'ðĶ',['ðĶ','ðĶ§'],'ð','ðĶ','ðĶ','ðŠ','ðŦ','ðĶ','ðĶ','ð','ð','ð','ð','ð','ð','ð','ðĶ','ð','ðĶ','ð','ðĐ','ðĶŪ','ðâðĶš','ð','ð','ðĶ','ðĶ','ðĶ','ðĶĒ','ðĶĐ','ðïļ','ð','ðĶ','ðĶĻ','ðĶĄ','ðĶĶ','ðĶĨ','ð','ð','ðŋïļ','ðĶ']];
jurassicPark.flat(50);

const entries = ['bob', 'sally',,,,,,,'cindy'];
entries.flat();

//flatMap
const jurassicParkChaos = jurassicPark.flatMap(creatures => creatures + 'ðĶ');

// Trim(), TrimStart(), TrimEnd(), TrimLeft(), TrimRight()
const userEmail1 = '           eddytheeagle@gmail.com';
const userEmail2 = 'jonnydangerous@gmail.com           ';
console.log(userEmail1.trimStart());
console.log(userEmail2.trimEnd());

// .fromEntries {Array to Obj} is the opposite of .entries {Obj to Array}
userProfiles = [['commanderTom', 23],['derekZlander', 40],['hansel', 18],];

Object.fromEntries(userProfiles);

// Try catch
try {
    bob +'hi';
} catch (error) {
    console.log('you messed up' + error);
}