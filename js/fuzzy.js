document.getElementById("cek").onclick = function() {
  kps = 0;
  tg = document.getElementById("tg").value;
  rnr = document.getElementById("rnr").value;
  po = document.getElementById("po").value;
  pt = document.getElementById("pt").value;
  kr = 0;

  var raido_kps = document.getElementsByName("kps");

  for (let i = 0; i < raido_kps.length; i++) {
    if (raido_kps[i].checked) {
      kps = raido_kps[i].value;
    }
  }

  var raido_kr = document.getElementsByName("kr");

  for (let i = 0; i < raido_kr.length; i++) {
    if (raido_kr[i].checked) {
      kr = raido_kr[i].value;
    }
  }

  console.log(
    "kps => " + kps,
    "Tangguan => " + tg,
    "rata rapot => " + rnr,
    "penghasilan orangtua => " + po,
    "Prestasi => " + pt,
    "kepemilikan rumah => " + kr,
  );

  // kartu Perlindungan Sosial
  kps_tidak = 0;
  kps_punya = 0;
  //tangungan
  tg_sedikit = 0;
  tg_sedang = 0;
  tg_banyak = 0;
  //Rata-rata Nilai Raport
  rnr_rendah = 0;
  rnr_sedang = 0;
  rnr_tinggi = 0;
  //penghasilan orangtua
  po_kecil = 0;
  po_sedang = 0;
  po_besar = 0;
  //Prestasi
  pt_sedikit = 0;
  pt_sedang = 0;
  pt_banyak = 0;
  //kepemilikan rumah
  kr_tidak = 0;
  kr_punya = 0;

  // KPS
  if (kps == 1) {
    kps_tidak = 1;
  }
  if (kps == 2) {
    kps_punya = 1;
  }

  // TG
  if (tg <= 1) {
    tg_sedikit = 1;
  }
  if (tg > 1 && tg < 3) {
    tg_sedikit = (3 - tg) / (3 - 1);
    tg_sedang = (tg - 1) / (3 - 1);
  }
  if (tg == 3) {
    tg_sedang = 1;
  }
  if (tg > 3 && tg < 5) {
    tg_sedang = (5 - tg) / (5 - 3);
    tg_banyak = (tg - 3) / (5 - 3);
  }
  if (tg >= 5) {
    tg_banyak = 1;
  }

  // RNR
  if (rnr <= 75) {
    rnr_rendah = 1;
  }
  if (rnr > 75 && rnr < 82.5) {
    rnr_rendah = (82.5 - rnr) / (82.5 - 75);
    rnr_sedang = (rnr - 75) / (82.5 - 75);
  }
  if (rnr == 82.5) {
    rnr_sedang = 1;
  }
  if (rnr > 82.5 && rnr < 90) {
    rnr_sedang = (90 - rnr) / (90 - 82.5);
    rnr_tinggi = (rnr - 82.5) / (90 - 82.5);
  }
  if (rnr >= 90) {
    rnr_tinggi = 1;
  }

  // PO
  if (po <= 1015000) {
    po_kecil = 1;
  }
  if (po > 1015000 && po < 3007500) {
    po_kecil = (3007500 - po) / (3007500 - 1015000);
    po_sedang = (po - 1015000) / (3007500 - 1015000);
  }
  if (po == 3007500) {
    po_sedang = 1;
  }
  if (po > 3007500 && po < 5000000) {
    po_sedang = (5000000 - po) / (5000000 - 3007500);
    po_besar = (po - 3007500) / (5000000 - 3007500);
  }
  if (po >= 5000000) {
    po_besar = 1;
  }

  // PT
  if (pt <= 1) {
    pt_sedikit = 1;
  }
  if (pt > 1 && pt < 2) {
    pt_sedikit = (2 - pt) / (2 - 1);
    pt_sedang = (pt - 1) / (2 - 1);
  }
  if (pt == 2) {
    pt_sedang = 1;
  }
  if (pt > 2 && pt < 4) {
    pt_sedang = (4 - pt) / (4 - 2);
    pt_banyak = (pt - 2) / (4 - 2);
  }
  if (pt >= 4) {
    pt_banyak = 1;
  }

  // kr
  if (kr == 1) {
    kr_tidak = 1;
  }
  if (kr == 2) {
    kr_punya = 1;
  }

  console.log(
    "Kepemilikan kartu sosial\n",
    "tidak " + kps_tidak,
    "punya " + kps_punya,
  );
  console.log(
    "tanggungan\n",
    "sedikit " + tg_sedikit,
    "sedang " + tg_sedang,
    "banyak " + tg_banyak,
  );
  console.log(
    "Rata-rata Nilai Raport\n",
    "rendah " + rnr_rendah,
    "sedang " + rnr_sedang,
    "tinggi " + rnr_tinggi,
  );
  console.log(
    "penghasilan orangtua\n",
    "kecil " + po_kecil,
    "sedang " + po_sedang,
    "besar " + po_besar,
  );
  console.log(
    "Prestasi\n",
    "sedikit " + pt_sedikit,
    "sedang " + pt_sedang,
    "banyak " + pt_banyak,
  );
  console.log("kepemilikan rumah\n", "tidak " + kr_tidak, "punya " + kr_punya);

  var bsm = new Array();
  class DapatBSM {
    constructor(kps, tg, rnr, po, pt, kr) {
      if (kps != 0) {
        if (tg != 0) {
          if (rnr != 0) {
            if (po != 0) {
              if (pt != 0) {
                if (kr != 0) {
                  var hasil_output = Math.min(kps, tg, rnr, po, pt, kr);
                  bsm.push([hasil_output, 2]);
                  console.log("dapat");
                }
              }
            }
          }
        }
      }
    }
  }

  class TidakBSM {
    constructor(kps, tg, rnr, po, pt, kr) {
      if (kps != 0) {
        if (tg != 0) {
          if (rnr != 0) {
            if (po != 0) {
              if (pt != 0) {
                if (kr != 0) {
                  var hasil_output = Math.min(kps, tg, rnr, po, pt, kr);
                  bsm.push([hasil_output, 1]);
                  console.log("tidak");
                }
              }
            }
          }
        }
      }
    }
  }

  // Dapat BSM
  new DapatBSM(
    kps_punya,
    tg_sedang,
    rnr_tinggi,
    po_kecil,
    pt_sedikit,
    kr_tidak,
  );
  new DapatBSM(
    kps_punya,
    tg_banyak,
    rnr_rendah,
    po_kecil,
    pt_sedikit,
    kr_tidak,
  );
  new DapatBSM(
    kps_punya,
    tg_banyak,
    rnr_rendah,
    po_sedang,
    pt_sedang,
    kr_punya,
  );
  new DapatBSM(kps_punya, tg_sedang, rnr_tinggi, po_kecil, pt_banyak, kr_punya);
  new DapatBSM(
    kps_tidak,
    tg_sedikit,
    rnr_sedang,
    po_sedang,
    pt_banyak,
    kr_tidak,
  );
  //tambah
  new DapatBSM(kps_tidak, tg_banyak, rnr_tinggi, po_kecil, pt_sedang, kr_punya);
  new DapatBSM(
    kps_tidak,
    tg_banyak,
    rnr_sedang,
    po_kecil,
    pt_sedikit,
    kr_punya,
  );
  new DapatBSM(
    kps_tidak,
    tg_sedang,
    rnr_sedang,
    po_kecil,
    pt_sedikit,
    kr_punya,
  );
  new DapatBSM(
    kps_punya,
    tg_sedang,
    rnr_sedang,
    po_kecil,
    pt_sedang,
    kr_tidak,
  );
  new DapatBSM(
    kps_punya,
    tg_banyak,
    rnr_sedang,
    po_kecil,
    pt_sedang,
    kr_tidak,
  );
  new DapatBSM(
    kps_punya,
    tg_sedikit,
    rnr_sedang,
    po_kecil,
    pt_sedang,
    kr_tidak,
  );
  new DapatBSM(
    kps_punya,
    tg_banyak,
    rnr_tinggi,
    po_kecil,
    pt_sedang,
    kr_tidak,
  );
  new DapatBSM(
    kps_punya,
    tg_sedikit,
    rnr_tinggi,
    po_kecil,
    pt_sedang,
    kr_tidak,
  );
  new DapatBSM(
    kps_punya,
    tg_banyak,
    rnr_rendah,
    po_kecil,
    pt_sedikit,
    kr_tidak,
  );
  new DapatBSM(
    kps_punya,
    tg_sedikit,
    rnr_rendah,
    po_kecil,
    pt_sedikit,
    kr_tidak,
  );
  new DapatBSM(
    kps_punya,
    tg_banyak,
    rnr_rendah,
    po_sedang,
    pt_sedang,
    kr_tidak,
  );
  new DapatBSM(
    kps_punya,
    tg_sedang,
    rnr_rendah,
    po_sedang,
    pt_sedang,
    kr_tidak,
  );
  new DapatBSM(
    kps_punya,
    tg_sedikit,
    rnr_rendah,
    po_sedang,
    pt_sedang,
    kr_tidak,
  );
  new DapatBSM(
    kps_punya,
    tg_banyak,
    rnr_sedang,
    po_sedang,
    pt_banyak,
    kr_tidak,
  );
  new DapatBSM(
    kps_punya,
    tg_sedikit,
    rnr_sedang,
    po_sedang,
    pt_banyak,
    kr_tidak,
  );
  new DapatBSM(
    kps_punya,
    tg_banyak,
    rnr_tinggi,
    po_sedang,
    pt_banyak,
    kr_tidak,
  );
  new DapatBSM(
    kps_punya,
    tg_sedikit,
    rnr_tinggi,
    po_sedang,
    pt_banyak,
    kr_tidak,
  );
  new DapatBSM(
    kps_punya,
    tg_sedang,
    rnr_tinggi,
    po_sedang,
    pt_banyak,
    kr_tidak,
  );
  

  // Tidak Dapat BSM
  new TidakBSM(
    kps_tidak,
    tg_sedang,
    rnr_sedang,
    po_sedang,
    pt_sedang,
    kr_punya,
  );
  new TidakBSM(
    kps_tidak,
    tg_banyak,
    rnr_sedang,
    po_kecil,
    pt_sedikit,
    kr_punya,
  );
  new TidakBSM(kps_punya, tg_banyak, rnr_rendah, po_besar, pt_banyak, kr_tidak);
  new TidakBSM(
    kps_punya,
    tg_sedang,
    rnr_sedang,
    po_sedang,
    pt_banyak,
    kr_punya,
  );
  new TidakBSM(
    kps_punya,
    tg_sedang,
    rnr_rendah,
    po_sedang,
    pt_sedang,
    kr_punya,
  );
  //tambah
  new TidakBSM(
    kps_tidak,
    tg_sedang,
    rnr_tinggi,
    po_sedang,
    pt_sedikit,
    kr_punya,
  );
  new TidakBSM(
    kps_punya,
    tg_sedikit,
    rnr_rendah,
    po_sedang,
    pt_sedikit,
    kr_tidak,
  );
  new TidakBSM(
    kps_punya,
    tg_sedang,
    rnr_rendah,
    po_besar,
    pt_sedikit,
    kr_punya,
  );
  new TidakBSM(kps_tidak, tg_sedang, rnr_tinggi, po_besar, pt_banyak, kr_punya);

  console.log("BSM", bsm);

  var perkalian_new = 0;
  var pembagian_new = 0;

  for (let i = 0; i < bsm.length; i++) {
    var perkalian = bsm[i][0] * bsm[i][1];
    var pembagian = bsm[i][0];
    perkalian_new += perkalian;
    pembagian_new += pembagian;
  }

  console.log("perkalian_new => ", perkalian_new);
  console.log("pembagian_new => ", pembagian_new);

  hasil = perkalian_new / pembagian_new;

  if (hasil >= 1.5) {
    console.log("Dapat BSM => " + hasil);
    document.getElementById("hasil").innerText = "Selamat Anda Mendapat BSM";
  } else {
    console.log("Tidak BSM => " + hasil);
    document.getElementById("hasil").innerText = "Maaf Anda Tidak dapat BSM";
  }
};
