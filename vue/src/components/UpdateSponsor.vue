<template lang="">
    <div>
        <div class='grid lg:grid-cols-5 grid-cols-1 overflow-x-hidden gap-10 px-4 text-center container mx-auto my-16'>
            <!-- Loop for sponser -->
            <div v-for="(item, index) in items" :key="index" class="text-md my-3 font-semibold shadow-md p-4 border border-gray-300">
                <img class="w-24 h-24 mx-auto mb-2 " :src=item.img alt="ieb">
             <a class='text-md font-bold' :href=item.link> {{item.name}}</a>
            </div>
        </div>

    </div>
</template>
   
<script>
import BCIC from "../assets/updates_sponsors/BCIC.jpg";
import BPDBLogo from "../assets/updates_sponsors/BPDBLogo.png";
import BREBLogo from "../assets/updates_sponsors/BREBLogo.png";
import BSCIC from "../assets/updates_sponsors/BSCIC.jpeg";
import BSCLlogo from "../assets/updates_sponsors/BSCLlogo.png";
import BTCL from "../assets/updates_sponsors/BTCL.png";
import BTRC from "../assets/updates_sponsors/BTRC.png";
import BangladeshRailwaylogo from "../assets/updates_sponsors/BangladeshRailwaylogo.jpg";
import CITY from "../assets/updates_sponsors/CITY.jpg";
import DMTCL from "../assets/updates_sponsors/DMTCL.png";
import DPHE_logo from "../assets/updates_sponsors/DPHE_logo.jpg";
import DTCA from "../assets/updates_sponsors/DTCA.png";
import Dhaka_WASA_logo from "../assets/updates_sponsors/Dhaka_WASA_logo.jpeg";
import legd from "../assets/updates_sponsors/LGEDLogo.jpg";
import NESCO from "../assets/updates_sponsors/NESCO.png";
import PETROBANGLA from "../assets/updates_sponsors/PETROBANGLA.png";
import RHDlogo from "../assets/updates_sponsors/RHDlogo.jpg";
import TITAS from "../assets/updates_sponsors/TITAS.png";
import VOE from "../assets/updates_sponsors/VOELOGO.png";
import WZPDCL from "../assets/updates_sponsors/WZPDCL.png";
import apscl from "../assets/updates_sponsors/apscl.jpeg";
import badclogo from '../assets/updates_sponsors/badclogo.jpg';
import bbalogo from "../assets/updates_sponsors/bbalogo.png";
import bgcl from "../assets/updates_sponsors/bgcl.png";
import BWDB from "../assets/updates_sponsors/bwdb-01.png";
import descologo from "../assets/updates_sponsors/descologo.png";
import dpdclogo from "../assets/updates_sponsors/dpdclogo.png";
import eedlogo from "../assets/updates_sponsors/eedlogo.png";
import gtcl from "../assets/updates_sponsors/gtcl.jpeg";
import ieblogo from "../assets/updates_sponsors/ieblogo.png";
import NPCBL from "../assets/updates_sponsors/npcbl.png";
import NWPGCL from "../assets/updates_sponsors/nwpgcl.png";
import pgcb from "../assets/updates_sponsors/pgcb.png";
import pwdlogo from "../assets/updates_sponsors/pwdlogo.jpg";
import teletalklogo from "../assets/updates_sponsors/teletalklogo.jpg";
export default {
    data() {
        return {
            items: [
                {
                    img: apscl,
                    name: 'APSCL UPDATES:: আশুগঞ্জ পাওয়ার স্টেশন কোম্পানী লিমিটেড সংবাদ',
                    link: 'https://www.facebook.com/media/set/?set=a.2339681422854542&type=3',
                },
                {
                    img: badclogo,
                    name: 'BADC UPDATES:: বাংলাদেশ কৃষি উন্নয়ন কর্পোরেশন সংবাদ',
                    link: 'https://www.facebook.com/media/set/?set=a.2339699292852755&type=3',
                },
                {
                    img: BangladeshRailwaylogo,
                    name: 'Bangladesh Railway Updates:: বাংলাদেশ রেলওয়ে সংবাদ',
                    link: 'https://www.facebook.com/media/set/?set=a.673082481520881&type=3',
                },
                {
                    img: bbalogo,
                    name: 'BBA UPDATES:: বাংলাদেশ সেতু কর্তৃপক্ষ সংবাদ',
                    link: 'https://www.facebook.com/media/set/?set=a.2337509146405103&type=3',
                },
                {
                    img: BCIC,
                    name: 'BCIC UPDATES :: বাংলাদেশ কেমিক্যাল ইন্ডাষ্ট্রিজ কর্পোরেশন সংবাদ',
                    link: 'https://www.facebook.com/media/set/?set=a.746449894184139&type=3',
                },
                {
                    img: bgcl,
                    name: 'BGCL UPDATES :: বুয়েট গ্র্যাজুয়েটস ক্লাব সংবাদ',
                    link: 'https://www.facebook.com/media/set/?set=a.2295650043924347&type=3',
                },
                {
                    img: BPDBLogo,
                    name: 'BPDB UPDATES:: বাংলাদেশ বিদ্যুৎ উন্নয়ন বোর্ড সংবাদ',
                    link: 'https://www.facebook.com/media/set/?set=a.2339698729519478&type=3',
                },
                {
                    img: BREBLogo,
                    name: 'BREB UPDATES:: বাংলাদেশ পল্লী বিদ্যুতায়ন বোর্ড সংবাদ',
                    link: 'https://www.facebook.com/media/set/?set=a.2339683729520978&type=3',
                },
                {
                    img: BSCIC,
                    name: 'BSCIC UPDATES :: বাংলাদেশ ক্ষুদ্র ও কুটির শিল্প করপোরেশন সংবাদ',
                    link: 'https://www.facebook.com/media/set/?vanity=VoE.Bangladesh&set=a.751069827055479',
                },
                {
                    img: BSCLlogo,
                    name: 'BSCL UPDATES :: বাংলাদেশ স্যাটেলাইট কোম্পানি লিমিটেড সংবাদ',
                    link: 'https://www.facebook.com/media/set/?set=a.697461335749662&type=3',
                },
                {
                    img: BTCL,
                    name: 'BTCL UPDATES :: বাংলাদেশ টেলিকমিউনিকেশন্স কোম্পানি সংবাদ',
                    link: 'https://www.facebook.com/media/set/?vanity=VoE.Bangladesh&set=a.751356860360109',
                },
                {
                    img: BTRC,
                    name: 'BTRC UPDATES :: বাংলাদেশ টেলিযোগাযোগ নিয়ন্ত্রণ কমিশন সংবাদ',
                    link: 'https://www.facebook.com/media/set/?vanity=VoE.Bangladesh&set=a.751357937026668',
                },
                {
                    img: BWDB,
                    name: 'BWDB UPDATES:: বাংলাদেশ পানি উন্নয়ন বোর্ড সংবাদ',
                    link: 'https://www.facebook.com/media/set/?set=a.2339683399521011&type=3',
                },
                {
                    img: CITY,
                    name: 'CITY UPDATES :: সিটি কর্পোরেশন + শহর উন্নয়ন কর্তৃক্ষের সংবাদ',
                    link: 'https://www.facebook.com/media/set/?set=a.748013300694465&type=3',
                },

                {
                    img: descologo,
                    name: 'DESCO UPDATES :: ঢাকা ইলেক্ট্রিক সাপ্লাই কোম্পানি লিমিটেড সংবাদ',
                    link: 'https://www.facebook.com/media/set/?set=a.2460080457481304&type=3',
                },
                {
                    img: dpdclogo,
                    name: 'DPDC UPDATES:: ঢাকা পাওয়ার ডিস্ট্রিবিউশন কোম্পানি লিমিটেড সংবাদ',
                    link: 'https://www.facebook.com/media/set/?set=a.2339698502852834&type=3',
                },
                {
                    img: DPHE_logo,
                    name: 'DPHE UPDATES :: জনস্বাস্থ্য প্রকৌশল অধিদপ্তর সংবাদ',
                    link: 'https://www.facebook.com/media/set/?set=a.2422136904608993&type=3',
                },
                {
                    img: DTCA,
                    name: 'DTCA UPDATES :: ঢাকা পরিবহন সমন্বয় কর্তৃপক্ষ সংবাদ',
                    link: 'https://www.facebook.com/media/set/?set=a.743108517851610&type=3',
                },
                {
                    img: DMTCL,
                    name: 'DMTCL UPDATES :: ঢাকা ম্যাস ট্রানজিট কোম্পানি সংবাদ',
                    link: 'https://www.facebook.com/media/set/?vanity=VoE.Bangladesh&set=a.751078103721318',
                },
                {
                    img: eedlogo,
                    name: 'EED UPDATES:: শিক্ষা প্রকৌশল অধিদপ্তর সংবাদ',
                    link: "https://www.facebook.com/media/set/?set=a.2339682252854459&type=3",
                },
                {
                    img: gtcl,
                    name: 'GTCL UPDATES :: গ্যাস ট্রান্সমিশন কোম্পানী লিমিটেড সংবাদ',
                    link: "https://www.facebook.com/media/set/?set=a.2425061594316524&type=3",
                },
                {
                    img: ieblogo,
                    name: 'IEB UPDATES :: আইইবি সংবাদ',
                    link: "https://www.facebook.com/media/set/?set=a.2246158255540193&type=3",
                },
                {
                    img: legd,
                    name: 'LGED UPDATES:: স্থানীয় সরকার প্রকৌশল অধিদপ্তর সংবাদ',
                    link: "https://www.facebook.com/media/set/?set=a.2339689149520436&type=3",
                },
                {
                    img: NESCO,
                    name: 'NESCO UPDATES :: নর্দান ইলেকট্রিসিটি সাপ্লাই কোম্পানি সংবাদ',
                    link: "https://www.facebook.com/media/set/?vanity=VoE.Bangladesh&set=a.751093253719803",
                },
                {
                    img: NPCBL,
                    name: 'NPCBL : নিউক্লিয়ার পাওয়ার প্লান্ট কোম্পানি বাংলাদেশ লিমিটেড সংবাদ',
                    link: "https://www.facebook.com/media/set/?set=a.2440619522760731&type=3",
                },
                {
                    img: NWPGCL,
                    name: 'NWPGCL Updates:: নর্থওয়েস্ট পাওয়ার জেনারেশন কোম্পানি সংবাদ',
                    link: "https://www.facebook.com/media/set/?set=a.2446966848792665&type=3",
                },
                {
                    img: PETROBANGLA,
                    name: 'PETROBANGLA UPDATES :: বাংলাদেশ তেল, গ্যাস ও খনিজসম্পদ কর্পোরেশন (পেট্রোবাংলা) সংবাদ',
                    link: "https://www.facebook.com/media/set/?vanity=VoE.Bangladesh&set=a.751084660387329",
                },
                {
                    img: pgcb,
                    name: 'PGCB UPDATES:: পাওয়ার গ্রিড কোম্পানি অব বাংলাদেশ লিমিটেড সংবাদ',
                    link: "https://www.facebook.com/media/set/?set=a.2339689432853741&type=3",
                },
                {
                    img: pwdlogo,
                    name: 'PWD UPDATES:: গণপূর্ত অধিদপ্তর সংবাদ',
                    link: "https://www.facebook.com/media/set/?set=a.2339684566187561&type=3",
                },
                {
                    img: RHDlogo,
                    name: 'RHD UPDATES:: সড়ক ও জনপথ অধিদপ্তর সংবাদ',
                    link: "https://www.facebook.com/media/set/?set=a.2339689959520355&type=3",
                },
                {
                    img: teletalklogo,
                    name: 'Teletalk Updates :: টেলিটক বাংলাদেশ সংবাদ',
                    link: "https://www.facebook.com/media/set/?set=a.2447048795451137&type=3",
                },
                {
                    img: TITAS,
                    name: 'TITAS UPDATES :: তিতাস গ্যাস ট্রান্সমিসন এন্ড ডিস্ট্রিবিউশন কোম্পানী সংবাদ',
                    link: "https://www.facebook.com/media/set/?vanity=VoE.Bangladesh&set=a.751089313720197",
                },
                {
                    img: VOE,
                    name: 'VOE UPDATES :: ভয়েস অফ ইঞ্জিনিয়ার্স বাংলাদেশ সংবাদ',
                    link: "https://www.facebook.com/media/set/?set=a.2395137210642296&type=3",
                },
                {
                    img: Dhaka_WASA_logo,
                    name: 'WASA UPDATES:: ঢাকা ওয়াসা সংবাদ',
                    link: "https://www.facebook.com/media/set/?set=a.2339685046187513&type=3",
                },
                {
                    img: WZPDCL,
                    name: 'WZPDCL UPDATES :: ওয়েস্ট জোন পাওয়ার ডিস্ট্রিবিউশন কোম্পানি সংবাদ',
                    link: "https://www.facebook.com/media/set/?vanity=VoE.Bangladesh&set=a.751099580385837",
                },


            ],
        };
    },
};
</script>



<style></style>
