// Script to count "undefined" words in the data
const data = `undefined
ckesselheim@wellfasturgentcare.com
undefined
undefined
jnewbert@wellspringcaring.com
mhershberger@wngpa.com
cgarcia1@wohhospice.com
undefined
haq@wnymedical.com
melissa.pelletier@woundcentrics.com
randi@yourhomecare.com
undefined
angela.kitchen@ehnhllc.com
lauren.price@encompasshealth.com
zachary.burks@endopracticepartners.com
angela.gentry@enniscarecenter.com
lconfair@ernowwichitafalls.com
undefined
undefined
patrick.foote@excelhealth.co
undefined
jaclyn@expressyourselftherapy.com
knelson@familyfirst-urgentcare.com
undefined
baochi.nguyen@flagshiphealth.org
undefined
jhennessey@gsmedicalcenter.org
natalie@gatewayurgent.com
brittany@thegoodhealthclinic.org
undefined
antonyc@gramercysurgery.com
katie.curley@glcor.com
lindsey@greenmountainsurgery.com
angie@greenwoodortho.com
undefined
undefined
noelle.stamos@harleystreetmed.com
bfinchum@havenbirthandwellness.com
undefined
dlarson@healthbridgekids.com
efamous@rmcl.org
undefined
undefined
undefined
chrisw@hocgb.org
undefined
undefined
shawn.m@affiliateddialysisca.com
natalie@homeinstead.com
undefined
mbristol@fisherhome.org
cheryl.deirup@hospiceofthemidwest.com
lzabar@goldbergmd.net
nragonton@hnkop.org
jespey@humanauthealth.com
ashley@indigocaremanagement.com
undefined
sarah@idahoskininstitute.com
k.quraishi@impactphysiciangroup.com
cdrouant@inandoutcare.com
sdresser@incarephysicians.com
sarah_davis@adultday.com
marycook@infinitehelpinghands.com
pdardess@ipfcc.org
claytonn@integratedhealthpartners.net
tlamarche@interfaithhealthcenter.org
ddagdagan@interimhealthcare.com
undefined
kara@ioa-hcf.com
laurie.johnson@unitypoint.org
rima.woo@ivybraintumorcenter.org
gromero@kairoshomecare.net
sayoo@katrixhomecare.com
undefined
rjbrooks@cardiologycareclinics.com
kim@lc-plasticsurgery.com
lgundry@lakesuperiorhospice.org
lschneider@cleftclinic.org
undefined
undefined
undefined
undefined
undefined
seberhart@legacyoflifehawaii.org
micahd@lifebanc.org
undefined
undefined
dclark@lifeshareok.org
sdavis@life-source.org
nargiza@lilac.health
undefined
kmccoy@lunadelvallehcs.com
mcollins@macphysicians.com
undefined
rbautista@maitrisf.org
emma@mbhomecare.com
undefined
amber@mercyhealthcenter.net
undefined
dvaynman@metromeduc.com`;

// Split the data into lines
const lines = data.split('\n');

// Count "undefined" occurrences
const undefinedCount = lines.filter(line => line.trim() === 'undefined').length;

// Count total lines
const totalLines = lines.length;

// Count non-undefined lines (email addresses)
const emailCount = totalLines - undefinedCount;

console.log('=== UNDEFINED COUNT RESULTS ===');
console.log(`Total "undefined" words: ${undefinedCount}`);
console.log(`Total lines: ${totalLines}`);
console.log(`Email addresses: ${emailCount}`);
console.log(`Percentage undefined: ${((undefinedCount / totalLines) * 100).toFixed(1)}%`);


