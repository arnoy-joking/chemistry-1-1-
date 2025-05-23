
const lectureDataRaw = [
  { name: "Course Roadmap", vid: "RUQcm3vIbWo", npdf: "20240527-1716748184-LRH05IsN.pdf", clid: "13761", category: "Foundation & Basics" },
  { name: "Basic Building Class(BBC)-01", vid: "CLrwwQj697Q", npdf: "20240529-1716937235-9lpGk0ak.pdf", clid: "13785", category: "Foundation & Basics" },
  { name: "Basic Building Class(BBC)-02", vid: "P-dkM5_I1VU", npdf: "20240601-1717261772-VB8HeJSt.pdf", clid: "13818", category: "Foundation & Basics" },
  { name: "Basic Building Class(BBC)-03", vid: "pxsGAGomnoI", npdf: "20240603-1717361228-TPilcyPf.pdf", clid: "13835", category: "Foundation & Basics" },
  { name: "Basic Building Class(BBC)-04", vid: "p3wBA8no6c4", npdf: "20240605-1717589649-Qsqg5u7r.pdf", clid: "13849", category: "Foundation & Basics" },
  { name: "Basic Building Class(BBC)-05", vid: "JJuvBfrGUVo", npdf: "20240607-1717710084-HL1UVZIy.pdf", clid: "13868", category: "Foundation & Basics" },
  { name: "Basic Building Class(BBC)-06", vid: "WlrST4v-kaI", npdf: "20240612-1718138903-CosRm2Hp.pdf", clid: "13910", category: "Foundation & Basics" },
  { name: "Basic Building Class(BBC)-07", vid: "cUM3EbhlMmU", npdf: "20240614-1718313883-TerlymZ6.pdf", clid: "13931", category: "Foundation & Basics" },
  { name: "গুণগত রসায়ন পর্ব-০১", vid: "_KsZlI7wwBo", npdf: "20240701-1719779817-aIxobbwK.pdf", clid: "13992", category: "Qualitative Chemistry" },
  { name: "গুণগত রসায়ন পর্ব-০২", vid: "u9-QXqsswyk", npdf: "20240703-1719944077-MSjIfz7g.pdf", clid: "14239", category: "Qualitative Chemistry" },
  { name: "গুণগত রসায়ন পর্ব-০৩", vid: "IGa_6J-VB3o", npdf: "20240705-1720129590-Kws5CXLp.pdf", clid: "14267", category: "Qualitative Chemistry" },
  { name: "গুণগত রসায়ন পর্ব-০৪", vid: "cOIPzY3ddJU", npdf: "20240708-1720385932-6hGrw8gr.pdf", clid: "14315", category: "Qualitative Chemistry" },
  { name: "গুণগত রসায়ন পর্ব-০৫", vid: "hWVHKkx2FJs", npdf: "20240710-1720616665-v7M9BxDL.pdf", clid: "14365", category: "Qualitative Chemistry" },
  { name: "গুণগত রসায়ন পর্ব-০৬", vid: "4aVBQzg5L80", npdf: "20240715-1720997756-tIbXPU3s.pdf", clid: "14478", category: "Qualitative Chemistry" },
  { name: "গুণগত রসায়ন পর্ব-০৭", vid: "GE4dDmImPSA", npdf: "20240820-1724176154-tJTn6aKB.pdf", clid: "14579", category: "Qualitative Chemistry" },
  { name: "গুণগত রসায়ন পর্ব-০৮", vid: "IaKl2mIISw8", npdf: "20240828-1724790082-jt5KjqbB.pdf", clid: "14606", category: "Qualitative Chemistry" },
  { name: "গুণগত রসায়ন পর্ব-০৯", vid: "JMeG_IB_Yvs", npdf: "20240830-1724967108-BAaCtxU5.pdf", clid: "14792", category: "Qualitative Chemistry" },
  { name: "গুণগত রসায়ন পর্ব-১০", vid: "ZnHMZAGrIj8", npdf: "20240902-1725216596-9uStRcWl.pdf", clid: "14806", category: "Qualitative Chemistry" },
  { name: "গুণগত পর্ব-১১", vid: "I6NTnTUikYY", npdf: "20240906-1725641873-2lKgq53l.pdf", clid: "14832", category: "Qualitative Chemistry" },
  { name: "গুণগত রসায়ন পর্ব-১২", vid: "um2noyXpjug", npdf: "20240909-1725825601-zdAXsmg9.pdf", clid: "14855", category: "Qualitative Chemistry" },
  { name: "গুণগত রসায়ন পর্ব-১৩", vid: "EIDocDa-xg4", npdf: "20240910-1725987615-f7GytNbZ.pdf", clid: "14867", category: "Qualitative Chemistry" },
  { name: "গুণগত রসায়ন পর্ব-১৪", vid: "GFhfs-J2_3o", npdf: "20240913-1726205413-mWblYhsS.pdf", clid: "14906", category: "Qualitative Chemistry" },
  { name: "দ্রাব্যতা - পর্ব ০১", vid: "X7-HUoe_ud4", npdf: "20240916-1726424417-x6ou2UWz.pdf", clid: "14937", category: "Qualitative Chemistry" },
  { name: "দ্রab্যতা - পর্ব ০২", vid: "aS2__Xjjc0M", npdf: "20240918-1726604182-9kBeOFvT.pdf", clid: "14956", category: "Qualitative Chemistry" },
  { name: "দ্রাব্যতা - পর্ব ০৩", vid: "HgbSl2W9thE", npdf: "20240921-1726898750-7dLilSCH.pdf", clid: "15006", category: "Qualitative Chemistry" },
  { name: "দ্রাব্যতা - পর্ব ০৪", vid: "Zoyiw5YHdGk", npdf: "20240923-1727076002-eRaPNEQd.pdf", clid: "15026", category: "Qualitative Chemistry" },
  { name: "দ্রাব্যতা - পর্ব ০৫", vid: "2321lmDBC58", npdf: "20240924-1727197468-GFHHGErh.pdf", clid: "15047", category: "Qualitative Chemistry" },
  { name: "দ্রাব্যতা - পর্ব ০৬", vid: "6P0rdcXowy0", npdf: "20240927-1727378157-FT7ahqe0.pdf", clid: "15078", category: "Qualitative Chemistry" },
  { name: "দ্রাব্যতা - পর্ব ০৭", vid: "YiKI6mSZ6yg", npdf: "20241002-1727807137-yGxhBnvQ.pdf", clid: "15131", category: "Qualitative Chemistry" },
  { name: "দ্রাব্যতা । অধ:ক্ষেপ সংক্রান্ত ম্যাথ", vid: "SZ7kzxWPWJo", npdf: "20241003-1727899897-fQQCcxBB.pdf", clid: "15150", category: "Qualitative Chemistry" },
  { name: "দ্রাব্যতা | সমআয়ন প্রভাব", vid: "YukQN2Xys9U", npdf: "20241006-1728204795-JpaEbaMi.pdf", clid: "15198", category: "Qualitative Chemistry" },
  { name: "দ্রাব্যতার উপর PH এর প্রভাব", vid: "xXMNJKEzNZU", npdf: "20241006-1728209625-DiFK076F.pdf", clid: "15199", category: "Qualitative Chemistry" },
  { name: "আয়ন শনাক্তকরণ", vid: "FJes1R9aark", npdf: "20241002-1727818674-AAhnAILi.pdf", clid: "15200", category: "Qualitative Chemistry" },
  { name: "শিখা পরীক্ষা ও তেজষ্ক্রিয়তা", vid: "pApzf0miQDQ", npdf: "20241017-1729168173-TvKefz6t.pdf", clid: "15332", category: "Qualitative Chemistry" },
  { name: "মৌলের পর্যায়বৃত্ত ধর্ম - পর্ব ০১", vid: "ZvwXwq_JALs", npdf: "20241019-1729338739-wZDChI9o.pdf", clid: "15337", category: "Periodic Properties" },
  { name: "মৌলের পর্যায়বৃত্ত ধর্ম - পর্ব ০২", vid: "oOQbjtrr25E", npdf: "20241021-1729448026-DzYyBwik.pdf", clid: "15379", category: "Periodic Properties" },
  { name: "মৌলের পর্যায়বৃত্ত ধর্ম - পর্ব ০৩", vid: "ngDqOXN0R4s", npdf: "20241025-1729803130-20uc1n5X.pdf", clid: "15419", category: "Periodic Properties" },
  { name: "মৌলের পর্যায়বৃত্ত ধর্ম - পর্ব ৪.১", vid: "8nr8Zb-CHg0", npdf: "20241028-1730055866-HOhrfiFb.pdf", clid: "15462", category: "Periodic Properties" },
  { name: "মৌলের পর্যায়বৃত্ত ধর্ম - পর্ব ৪.২", vid: "f8nwirkZ58Q", npdf: "20241028-1730055866-HOhrfiFb.pdf", clid: "15463", category: "Periodic Properties" },
  { name: "মৌরের পর্যায়বৃত্ত ধর্ম - পর্ব ০৫", vid: "wzl4yRT4s7k", npdf: "20241104-1730659936-nC1vGD15.pdf", clid: "15547", category: "Periodic Properties" },
  { name: "মৌলের পর্যায়বৃত্ত ধর্ম - পর্ব ০৬", vid: "kR-tyH4bEHY", npdf: "20241110-1731196619-mwTxJJZ6.pdf", clid: "15856", category: "Periodic Properties" },
  { name: "মৌলের পর্যায়বৃত্ত ধর্ম - পর্ব ৬.২", vid: "a29pwQu2Tts", npdf: "20241113-1731440552-L8ktpKzN.pdf", clid: "15878", category: "Periodic Properties" },
  { name: "মৌলের পর্যায়বৃত্ত ধর্ম - পর্ব ০৭", vid: "idVoYLbY1s0", npdf: "20241117-1731861931-RHDYv0La.pdf", clid: "16074", category: "Periodic Properties" },
  { name: "মৌলের পর্যায়বৃত্ত ধর্ম - পর্ব ৮.১", vid: "YPAofIfRHgk", npdf: "20241122-1732291608-PBx550nd.pdf", clid: "16123", category: "Periodic Properties" },
  { name: "মৌলের পর্যায়বৃত্ত ধর্ম - পর্ব ৮.২", vid: "hGjJGRY2IqY", npdf: "20241125-1732486847-0Y1YMcPe.pdf", clid: "16221", category: "Periodic Properties" },
  { name: "মৌলের পর্যায়বৃত্ত ধর্ম - পর্ব ০৯", vid: "qINYlblz_Vo", npdf: "20241206-1733439837-akimHc9X.pdf", clid: "16339", category: "Periodic Properties" },
  { name: "মৌলের পর্যায়বৃত্ত ধর্ম - পর্ব ১০", vid: "MU1oVV0iJcE", npdf: "20241209-1733696432-CGd5SsRc.pdf", clid: "16382", category: "Periodic Properties" },
  { name: "মৌলের পর্যায়বৃত্ত ধর্ম - পর্ব ১১", vid: "pMKC7sehw80", npdf: "20241216-1734365525-HERacn00.pdf", clid: "16474", category: "Periodic Properties" },
  { name: "মৌলের পর্যায়বৃত্ত ধর্ম - পর্ব ১২", vid: "wJb-sIvlPCk", npdf: "20241216-1734365548-eyO3V3FM.pdf", clid: "16475", category: "Periodic Properties" },
  { name: "মৌলের পর্যায়বৃত্ত ধর্ম - পর্ব ১৩", vid: "snPvzhU09A0", npdf: "20241216-1734365563-bP2699jc.pdf", clid: "16476", category: "Periodic Properties" },
  { name: "মৌলের পর্যায়বৃত্ত ধর্ম - পর্ব ১৪", vid: "8fDDh9j4m4M", npdf: "20241216-1734365576-NyxsZxmh.pdf", clid: "16477", category: "Periodic Properties" },
  { name: "মৌলের পর্যায়বৃত্ত ধর্ম - পর্ব ১৫", vid: "l_iyYq02Kic", npdf: "20241213-1734033285-ADXww1KD.pdf", clid: "16424", category: "Periodic Properties" },
  { name: "মৌলের পর্যায়বৃত্ত ধর্ম - পর্ব ১৬", vid: "o6oaC_dQngo", npdf: "20241218-1734460745-dmzECrGg.pdf", clid: "16492", category: "Periodic Properties" },
  { name: "মৌলের পর্যায়বৃত্ত ধর্ম - পর্ব ১৭", vid: "fh5TXEi-8S0", npdf: "20241220-1734636976-QPg2nd6f.pdf", clid: "16516", category: "Periodic Properties" },
  { name: "মৌলের পর্যায়বৃত্ত ধর্ম - পর্ব ১৮", vid: "2gnkfdDbp5g", npdf: "20241223-1734904070-wRzQDurU.pdf", clid: "16536", category: "Periodic Properties" },
  { name: "মৌলের পর্যায়বৃত্ত ধর্ম - পর্ব ১৯", vid: "_J1gSdRTlN0", npdf: "20241225-1735069463-GfPogKfb.pdf", clid: "16553", category: "Periodic Properties" },
  { name: "মৌলের পর্যায়বৃত্ত ধর্ম - পর্ব ২০", vid: "jHqOfPppeVk", npdf: "20241227-1735242143-ySnmZZbO.pdf", clid: "16573", category: "Periodic Properties" },
  { name: "মৌলের পর্যায়বৃত্ত ধর্ম - পর্ব ২১", vid: "sZDSIVMkbGk", npdf: "20241230-1735512808-CCOvmkp5.pdf", clid: "16606", category: "Periodic Properties" },
  { name: "মৌলের পর্যায়বৃত্ত ধর্ম - পর্ব ২২", vid: "YQpuFq84-L0", npdf: "20250101-1735673303-7rSG4G9M.pdf", clid: "16621", category: "Periodic Properties" },
  { name: "মৌলের পর্যায়বৃত্ত ধর্ম - পর্ব ২৩", vid: "DSSnGCOcRgs", npdf: "20250103-1735844101-Oaow3UpN.pdf", clid: "16634", category: "Periodic Properties" },
  { name: "মৌলের পর্যায়বৃত্ত ধর্ম - পর্ব ২৪", vid: "2yZ5TnQz7Rc", npdf: "20250106-1736112495-ssUUot8l.pdf", clid: "16658", category: "Periodic Properties" },
  { name: "🔲 মৌলের পর্যায়বৃত্ত ধর্ম - MCQ Solve (2017-23)", vid: "tbDXYvjogdk", npdf: "20250106-1736142499-FUuw0Dju.pdf", clid: "16660", category: "Periodic Properties" },
  { name: "🔲 মৌলের পর্যায়বৃত্ত ধর্ম - CQ Solve (2017-23)", vid: "7MNsw-0cdrI", npdf: "20250106-1736142963-Flwn3K5E.pdf", clid: "16661", category: "Periodic Properties" },
  { name: "মৌলের পর্যায়বৃত্ত ধর্ম - শেষ পর্ব", vid: "Nj-iy8gVgpg", npdf: null, clid: "16854", category: "Periodic Properties" },
  { name: "রাসায়নিক পরিবর্তন - পর্ব ০১", vid: "BiqBDNb9NQQ", npdf: "20250126-1737830923-zvTGCirl.pdf", clid: "16954", category: "Chemical Change" },
  { name: "রাসায়নিক পরিবর্তন - পর্ব ০২", vid: "nk5c5ClU6X0", npdf: "20250127-1737918975-0wrT62wY.pdf", clid: "16962", category: "Chemical Change" },
  { name: "রাসায়নিক পরিবর্তন - পর্ব ০৩", vid: "VVCPuuzyda4", npdf: "20250204-1738620741-jw3hji7a.pdf", clid: "17116", category: "Chemical Change" },
  { name: "রাসায়নিক পরিবর্তন - পর্ব ০৪", vid: "p3s3x_E-QjQ", npdf: "20250204-1738691757-HXD1GYzh.pdf", clid: "17125", category: "Chemical Change" },
  { name: "রাসায়নিক পরিবর্তন - পর্ব ০৫", vid: "r8yTMCCmnn4", npdf: "20250206-1738779901-8VpNQA7c.pdf", clid: "17147", category: "Chemical Change" },
  { name: "রাসায়নিক পরিবর্তন - পর্ব ০৬", vid: "lYDoS17pygQ", npdf: "20250210-1739132326-J1VpSC24.pdf", clid: "17186", category: "Chemical Change" },
  { name: "রাসায়নিক পরিবর্তন - পর্ব ০৭", vid: "CNQ6X2KFLfk", npdf: "20250213-1739467283-iKhht0Qc.pdf", clid: "17226", category: "Chemical Change" },
  { name: "রাসায়নিক পরিবর্তন - পর্ব ০৮", vid: "cxcfKjgFBas", npdf: "20250214-1739472276-cs2jSOPs.pdf", clid: "17469", category: "Chemical Change" },
  { name: "রাসায়নিক পরিবর্তন - পর্ব ০৯", vid: "qgRG7dAatl4", npdf: "20250217-1739737025-DwtbCGre.pdf", clid: "17562", category: "Chemical Change" },
  { name: "রাসায়নিক পরিবর্তন - পর্ব ১০", vid: "q9Rwc6_3nnc", npdf: "20250219-1739906500-hU6MfCaT.pdf", clid: "17596", category: "Chemical Change" },
  { name: "রাসায়নিক পরিবর্তন - পর্ব ১১.১", vid: "yAfpteRfUT8", npdf: "20250221-1740086447-JXKGLM1U.pdf", clid: "17622", category: "Chemical Change" },
  { name: "রাসায়নিক পরিবর্তন - পর্ব ১১.২", vid: "7kz4crQ8TrA", npdf: "20250221-1740086526-pBZYoUUT.pdf", clid: "17623", category: "Chemical Change" },
  { name: "রাসায়নিক পরিবর্তন - পর্ব ১১.৩", vid: "tV_OThoh8lA", npdf: "20250221-1740138511-u9Fbr0ax.pdf", clid: "17629", category: "Chemical Change" },
  { name: "Kp & Kc- CQ & MCQ", vid: "cFUnBtBmQtM", npdf: "20240502-1714599034-qQA4HOND.pdf", clid: "17652", category: "Chemical Change" },
  { name: "রাসায়নিক পরিবর্তন - পর্ব ১২", vid: "BqM1FeVjk2A", npdf: "20250225-1740505568-LwGAxC92.pdf", clid: "17782", category: "Chemical Change" },
  { name: "রাসায়নিক পরিবর্তন - পর্ব ১৩", vid: "8Xqe_RBbJdA", npdf: "20250303-1740940956-x10233zp.pdf", clid: "17917", category: "Chemical Change" },
  { name: "রাসায়নিক পরিবর্তন - পর্ব ১৪", vid: "tN4fo6KSihA", npdf: "20250306-1741200331-mrcQczBd.pdf", clid: "18015", category: "Chemical Change" },
  { name: "রাসায়নিক পরিবর্তন - পর্ব ১৫", vid: "A2K6GmF7c_A", npdf: "20250311-1741632569-vhhLT0og.pdf", clid: "18159", category: "Chemical Change" },
  { name: "রাসায়নিক পরিবর্তন - পর্ব ১৬", vid: "0bV_E4rMIjM", npdf: "20250312-1741781551-NUKEOeYT.pdf", clid: "18187", category: "Chemical Change" },
  { name: "রাসায়নিক পরিবর্তন - পর্ব ১৭", vid: "85TdWPDUVAQ", npdf: "20250320-1742471871-snoNPRML.pdf", clid: "18328", category: "Chemical Change" },
  { name: "রাসায়নিক পরিবর্তন - পর্ব ১৮", vid: "CKzRDWmNsEg", npdf: "20250324-1742753281-zbk7fE86.pdf", clid: "18378", category: "Chemical Change" },
  { name: "রাসায়নিক পরিবর্তন - পর্ব ১৯", vid: "vBdejz9IU0U", npdf: "20250408-1744131124-JdzHgCH5.pdf", clid: "18681", category: "Chemical Change" },
  { name: "রাসায়নিক পরিবর্তন - পর্ব ২০", vid: "_ldOpfMFLPU", npdf: "20250408-1744133818-9CwUXbfO.pdf", clid: "18699", category: "Chemical Change" },
  { name: "কর্মমুখী রসায়ন - পর্ব ০১", vid: "T0FQ2qnuj5U", npdf: "20250416-1744745067-fb4IFhH3.pdf", clid: "18781", category: "Applied Chemistry" },
  { name: "কর্মমুখী রসায়ন - পর্ব ০২", vid: "jTRQAtEtgEw", npdf: "20250418-1744921535-456C4SRE.pdf", clid: "18809", category: "Applied Chemistry" },
  { name: "কর্মমুখী রসায়ন - পর্ব ০৩", vid: "GCWIuXp0GKE", npdf: "20250423-1745347364-ZoyLtgxu.pdf", clid: "18874", category: "Applied Chemistry" },
  { name: "কর্মমুখী রসায়ন - পর্ব ০৪", vid: "YPfG16y_lIU", npdf: "20250428-1745785434-FlzTojOb.pdf", clid: "18927", category: "Applied Chemistry" },
  { name: "কর্মমুখী রসায়ন - পর্ব ০৫", vid: "Ryuvcw8T4X4", npdf: "20250430-1745958813-UfNukZak.pdf", clid: "18951", category: "Applied Chemistry" },
  { name: "কর্মমুখী রসায়ন শেষ পর্ব", vid: "I7m1jydkH-0", npdf: "20250507-1746564219-G2wVGAgv.pdf", clid: "19023", category: "Applied Chemistry" },
  { name: "Special Class - Lewis Dot Structure", vid: "jwC-qUU_YXA", npdf: "20250112-1736674297-EuZcxDQn.pdf", clid: "16761", category: "Special Lectures" },
  { name: "Special Live Session - Lecture 01", vid: "XzLM7iIOoos", npdf: "20250202-1738434734-hCzAvXWq.pdf", clid: "17003", category: "Special Lectures" },
];

const classCategoriesConfig = {
  "Foundation & Basics": {
    id: "hsc-chem-foundation",
    name: "HSC Chemistry - Foundation",
    description: "Fundamental concepts and basic building blocks for HSC Chemistry.",
    lectures: [],
  },
  "Qualitative Chemistry": {
    id: "hsc-chem-qualitative",
    name: "HSC Chemistry - গুণগত রসায়ন",
    description: "Covers topics related to qualitative analysis, solubility, and atomic structure details.",
    lectures: [],
  },
  "Periodic Properties": {
    id: "hsc-chem-periodic",
    name: "HSC Chemistry - মৌলের পর্যায়বৃত্ত ধর্ম",
    description: "Study of periodic trends and properties of elements in the periodic table.",
    lectures: [],
  },
  "Chemical Change": {
    id: "hsc-chem-chemical-change",
    name: "HSC Chemistry - রাসায়নিক পরিবর্তন",
    description: "Explores chemical kinetics, equilibrium, acids-bases, and electrochemistry.",
    lectures: [],
  },
  "Applied Chemistry": {
    id: "hsc-chem-applied",
    name: "HSC Chemistry - কর্মমুখী রসায়ন",
    description: "Focuses on the practical applications of chemistry in daily life and industry.",
    lectures: [],
  },
  "Special Lectures": {
    id: "hsc-chem-special",
    name: "HSC Chemistry - Special Lectures",
    description: "Special topics, problem-solving sessions, and advanced discussions.",
    lectures: [],
  },
};

lectureDataRaw.forEach(lec => {
  const categoryKey = lec.category;
  if (classCategoriesConfig[categoryKey]) {
    classCategoriesConfig[categoryKey].lectures.push({
      id: lec.clid,
      name: lec.name.replace(/&amp;/g, '&'),
      videoUrl: `https://www.youtube.com/embed/${lec.vid}`,
      pdfUrl: lec.npdf ? `https://www.bondipathshala.com.bd/pdf/${lec.npdf}` : "",
      // For static version, notes and transcript would typically be fetched or pre-filled if available.
      // Here, they are kept empty as in the original data structure for simplicity.
      notes: `Notes for ${lec.name}. These would be the actual lecture notes.`, 
      transcript: `Transcript for ${lec.name}. This would be the video transcript.`,
    });
  }
});

const classes = Object.values(classCategoriesConfig);
