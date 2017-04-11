/**
* testapp Module
*
* Description
*/
var testapp = angular.module('testapp', [])

testapp.controller('sayren', function($scope){
	$scope.knives = [
    {
        "title":"Spyderco C81GP2 Paramilitary 2 Folding Knife 3.42 S30V Satin Plain Blade, Black G10 Handles",
        "img":"https://images.knifecenter.com/thumb/165x165/knifecenter/spyderco-knives/images/C81GP2c.jpg",
        "price":"$125.97"
    },
    {
        "title":"Spyderco C81GPCMO2 Paramilitary 2 Folding Knife 3-7/16 S30V Satin Blade, Digital Camo Handles",
        "img":"https://images.knifecenter.com/thumb/165x165/knifecenter/spyderco-knives/images/SP81GPCMO2a.jpg",
        "price":"$125.97"
    },
    {
        "title":"Spyderco C81GPBK2 Paramilitary 2 Folding Knife 3-7/16 S30V Black Blade, Black G10 Handles",
        "img":"https://images.knifecenter.com/thumb/165x165/knifecenter/spyderco-knives/images/SP81GPBK2c.jpg",
        "price":"$137.97"
    },
    {
        "title":"Spyderco C81GPCMOBK2 Paramilitary 2 Folding Knife 3-7/16 S30V Black Plain Blade, Digital Camo Handles",
        "img":"https://images.knifecenter.com/thumb/165x165/knifecenter/spyderco-knives/images/SP81GPCMOBK2anw.jpg",
        "price":"$137.97"
    },
    {
        "title":"Spyderco C85GP2 Yojimbo 2 Folding Knife 3.125 S30V Satin Plain Blade, Black G10 Handles",
        "img":"https://images.knifecenter.com/thumb/165x165/knifecenter/spyderco-knives/images/C85GP2.jpg",
        "price":"$125.97"
    },
    {
        "title":"Spyderco C95GP2 Manix 2 XL Folding Knife 3.88 S30V Satin Plain Blade, Black G10 Handles",
        "img":"https://images.knifecenter.com/thumb/165x165/knifecenter/spyderco-knives/images/SP95GP2t.jpg",
        "price":"$125.97"
    },
    {
        "title":"Spyderco C81GPDBL2 Paramilitary 2 Folding Knife 3-7/16 S110V Satin Blade, Blue/Purple G10 Handles",
        "img":"https://images.knifecenter.com/thumb/165x165/knifecenter/spyderco-knives/images/C81GPDBL2.jpg",
        "price":"$152.97"
    },
    {
        "title":"Spyderco C101CFPCW2 Manix 2 Folding Knife 3.37 CRU-WEAR Satin Plain Blade, Carbon Fiber Handles, KnifeCenter Exclusive",
        "img":"https://images.knifecenter.com/thumb/165x165/knifecenter/spyderco-knives/images/SP101CFPCW2nn.jpg",
        "price":"$164.97"
    },
    {
        "title":"Spyderco C123CFP Sage Folding Knife 3 S30V Plain Blade, Carbon Fiber Handles",
        "img":"https://images.knifecenter.com/thumb/165x165/knifecenter/spyderco-knives/images/123cfp.jpg",
        "price":"$131.97"
    },
    {
        "title":"Spyderco C101GPBBK2 Manix 2 Folding Knife 3-3/8 Black Plain S30V Blade, G10 Handles",
        "img":"https://images.knifecenter.com/thumb/165x165/knifecenter/spyderco-knives/images/C101GPBBK2.jpg",
        "price":"$125.97"
    },
    {
        "title":"Spyderco C223GP Para 3 Folding Knife 3 S30V Satin Plain Blade, Black G10 Handles (Paramilitary 3)",
        "img":"https://images.knifecenter.com/thumb/165x165/knifecenter/spyderco-knives/images/C223GP.jpg",
        "price":"$119.97"
    },
    {
        "title":"Spyderco C10PGRE Endura Flat Ground 3-3/4 ZDP-189 Satin Plain Blade, Green FRN Handles",
        "img":"https://images.knifecenter.com/thumb/165x165/knifecenter/spyderco-knives/images/C10PGRE.jpg",
        "price":"$106.17"
    },
    {
        "title":"Spyderco C101GPDBL2 Manix 2 Folding Knife 3.37 S110V Satin Plain Blade, Blue/Purple G10 Handles",
        "img":"https://images.knifecenter.com/thumb/165x165/knifecenter/spyderco-knives/images/C101GPDBL2.jpg",
        "price":"$140.97"
    },
    {
        "title":"Spyderco C156GPBN Brad Southard Flipper 3.46 CTS-204P Carpenter Steel Blade, Brown G10 Handle",
        "img":"https://images.knifecenter.com/thumb/165x165/knifecenter/spyderco-knives/images/SP156GPBNff.jpg",
        "price":"$257.97"
    },
    {
        "title":"Spyderco C195GPOR Brad Southard Positron Flipper 3.01 CPM-S35VN Satin Plain Blade, Polished Orange G10 Handles, KnifeCenter Exclusive",
        "img":"https://images.knifecenter.com/thumb/165x165/knifecenter/spyderco-knives/images/SP195GPORn.jpg",
        "price":"$167.97"
    },
    {
        "title":"Spyderco C36GPCMO Military Folding Knife 4 S30V Satin Plain Blade, Digital Camo G10 Handles",
        "img":"https://images.knifecenter.com/thumb/165x165/knifecenter/spyderco-knives/images/SP36GPCMOa.jpg",
        "price":"$160.77"
    },
    {
        "title":"Spyderco C152CFP Chaparral Folding Knife 2-13/16 CTS-XHP Plain Blade, Carbon Fiber Handles",
        "img":"https://images.knifecenter.com/thumb/165x165/knifecenter/spyderco-knives/images/C152CFP.jpg",
        "price":"$117.57"
    },
    {
        "title":"Spyderco FB20FPBK Schempp Rock Fixed 6-3/4 VG10 Blade, Black FRN Handles",
        "img":"https://images.knifecenter.com/thumb/165x165/knifecenter/spyderco-knives/images/FB20FPBK.jpg",
        "price":"$151.95"
    },
    {
        "title":"Spyderco C36TIFP Ti-Mil Military Folding Knife 4 S30V Satin Plain Blade, Fluted Titanium Handles",
        "img":"https://images.knifecenter.com/thumb/165x165/knifecenter/spyderco-knives/images/SP36TIFPd.jpg",
        "price":"$281.97"
    },
    {
        "title":"Spyderco C11TIPD Delica 4 Flat Ground 2.95 VG10 Damascus Plain Blade, Titanium Handles",
        "img":"https://images.knifecenter.com/thumb/165x165/knifecenter/spyderco-knives/images/SP11TIPDa.jpg",
        "price":"$161.97"
    },
    {
        "title":"Spyderco C168GP Battlestation Folding Knife  2.97 VG10 Hybrid Tanto Blade, Black G10 Handles",
        "img":"https://images.knifecenter.com/thumb/165x165/knifecenter/spyderco-knives/images/SP168GPa.jpg",
        "price":"$119.95"
    },
    {
        "title":"Spyderco C186TIP Marcin Slysz Bowie Folding Knife 3.42 CTS-XHP Stonewashed Plain Blade, Titanium Handles",
        "img":"https://images.knifecenter.com/thumb/165x165/knifecenter/spyderco-knives/images/C186TIP.jpg",
        "price":"$299.97"
    },
    {
        "title":"Spyderco C36GPCMOBK Military Folding Knife 4 S30V Black Plain Blade, Digital Camo G10 Handles",
        "img":"https://images.knifecenter.com/thumb/165x165/knifecenter/spyderco-knives/images/SP36GPCMOBKa.jpg",
        "price":"$172.77"
    },
    {
        "title":"Spyderco FB05P2 Temperance 2 Fixed 4-7/8 VG10 Steel Blade, Micarta Handles, Leather Sheath",
        "img":"https://images.knifecenter.com/thumb/165x165/knifecenter/spyderco-knives/images/SPFB05P2n.jpg",
        "price":"$215.97"
    },
    {
        "title":"Spyderco C163TIP Pingo Folding 2.35 Plain Elmax Blade, Titanium Bug Logo Handles (Sprint Run)",
        "img":"https://images.knifecenter.com/thumb/165x165/knifecenter/spyderco-knives/images/SP163TIPn.jpg",
        "price":"$124.95"
    },
    {
        "title":"Spyderco C203TIP Mantra 2 Folding Knife 3.2 M4 Plain Blade, Titanium Handles",
        "img":"https://images.knifecenter.com/thumb/165x165/knifecenter/spyderco-knives/images/C203TIP.jpg",
        "price":"$173.97"
    },
    {
        "title":"Spyderco C36GPE Military Folding Knife 4 S30V Satin Plain Blade, Black G10 Handles",
        "img":"https://images.knifecenter.com/thumb/165x165/knifecenter/spyderco-knives/images/C36GPE.jpg",
        "price":"$160.77"
    },
    {
        "title":"Spyderco C36GPBK Military Folding Knife 4 S30V Black Plain Blade, Black G10 Handles",
        "img":"https://images.knifecenter.com/thumb/165x165/knifecenter/spyderco-knives/images/SP36GPBKa.jpg",
        "price":"$172.77"
    }
]
})