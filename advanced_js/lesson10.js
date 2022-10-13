// Flat
const jurassicPark = [['🐜','🦟'],'🦗','🕷️',['🦂','🐢',['🐍'],['🦎'],['🦖'],'🦕',['🐙'],['🦑'],'🦐',['🦞'],['🦀'],['🐡','🐠','🐟','🐬','🐳','🐋','🦈'],'🐊',['🐅','🐆'],'🦓',['🦍','🦧'],'🐘','🦛','🦏','🐪','🐫','🦒','🦘','🐃','🐂','🐄','🐎','🐖','🐏','🐑','🦙','🐐','🦌','🐕','🐩','🦮','🐕‍🦺','🐈','🐓','🦃','🦚','🦜','🦢','🦩','🕊️','🐇','🦝','🦨','🦡','🦦','🦥','🐁','🐀','🐿️','🦔']];
jurassicPark.flat(50);

const entries = ['bob', 'sally',,,,,,,'cindy'];
entries.flat();

//flatMap
const jurassicParkChaos = jurassicPark.flatMap(creatures => creatures + '🦖');

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