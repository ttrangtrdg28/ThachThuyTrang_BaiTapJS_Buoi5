var numberFormat = new Intl.NumberFormat("VN-vn");
function getEle(id) {
  return document.getElementById(id);
}
/**
 * BÀI 1
 * Đầu vào:
 * - Tạo biến nhập điểm chuẩn
 * - Tạo biến nhập điểm thi của thí sinh ở môn thi 1
 * - Tạo biến nhập điểm thi của thí sinh ở môn thi 2
 * - Tạo biến nhập điểm thi của thí sinh ở môn thi 3
 * - Tạo biến chọn khu vực
 * - Tạo biến chọn đối tượng
 * Xử lý:
 * - Tính tổng điểm của thí sinh
 * - Nếu có môn thi bằng 0 thì không đậu
 * - Nếu tổng điểm thấp hơn cũng không đậu
 * Đầu ra:
 * - Hiển thị kết quả đậu hay rớt
 */

getEle("rs").onclick = function () {
  var diemChuan = getEle("diemChuan").value * 1;
  var diemMon1 = getEle("diemMon1").value * 1;
  var diemMon2 = getEle("diemMon2").value * 1;
  var diemMon3 = getEle("diemMon3").value * 1;
  var lstKhuVuc = getEle("lstKhuVuc").value;
  var diemKhuVuc = 0;
  var diemDoiTuong = 0;
  var lstDoiTuong = getEle("lstDoiTuong").value;
  var tinhKQ = "";
  var chonKhuVuc;
  var chonDoiTuong;
  if (lstKhuVuc !== "X") {
    diemKhuVuc = parseFloat(lstKhuVuc);
    chonKhuVuc = "Điểm cộng khu vực: " + lstKhuVuc;
    getEle("diemKhuVuc").innerHTML = chonKhuVuc;
  } else {
    chonKhuVuc = "Điểm cộng khu vực: X";
    getEle("diemKhuVuc").innerHTML = chonKhuVuc;
  }

  if (lstDoiTuong !== "0") {
    diemDoiTuong = parseFloat(lstDoiTuong);
    chonDoiTuong = "Điểm cộng đối tượng: " + lstDoiTuong;
    getEle("diemDoiTuong").innerHTML = chonDoiTuong;
  } else {
    chonDoiTuong = "Không thuộc đối tượng ưu tiên";
    getEle("diemDoiTuong").innerHTML = chonDoiTuong;
  }

  if (diemMon1 <= 0 || diemMon2 <= 0 || diemMon3 <= 0) {
    tinhKQ = "Bạn đã rớt. Do có kết quả điểm 1 môn thi bằng 0";
  } else if (diemMon1 > 0 && diemMon2 > 0 && diemMon3 > 0) {
    var tongDiem = diemMon1 + diemMon2 + diemMon3 + diemKhuVuc + diemDoiTuong;
    if (tongDiem < diemChuan) {
      tinhKQ = "Bạn đã rớt. Tổng điểm: " + tongDiem;
    } else {
      tinhKQ = "Bạn đã đậu. Tổng điểm: " + tongDiem;
    }
  }
  getEle("ketQua").innerHTML = tinhKQ;
};

/**
 * BÀI 2
 * Đầu vào:
 * - Tạo biến nhập tên
 * - Tạo biến nhập số điện sử dụng (kw)
 * Xử lý:
 * - Tính tiền điện trong các khoản: 0 - 50, 50 - 100, 100 - 200, 200 - 350, 350 trở lên
 * Đầu ra:
 * - Hiển thị tiền điện phải thu
 */

getEle("tinhTien").onclick = function () {
  var ten = getEle("ten");
  var kw = getEle("kw").value * 1;
  var rs = 0;
  if (0 < kw && kw <= 50) {
    rs = kw * 500;
  } else if (50 < kw && kw <= 100) {
    rs = 50 * 500 + (kw - 50) * 650;
  } else if (100 < kw && kw <= 200) {
    rs = 50 * 500 + 50 * 650 + (kw - 100) * 850;
  } else if (200 < kw && kw <= 350) {
    rs = 50 * 500 + 50 * 650 + 100 * 850 + (kw - 200) * 1100;
  } else if (kw > 350) {
    rs = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (kw - 350) * 1300;
  }

  var tien = "Tiền điện tháng nay: " + numberFormat.format(rs);
  getEle("tienDien").innerHTML = tien;
};

/**
 * BÀI 3:
 * Đầu vào:
 * - Tạo biến nhập họ tên
 * - Tạo biến nhập tổng thu nhập
 * - Tạo biến nhập số người phụ thuộc
 * - Tạo biến nhập tổng thu nhập chịu thuế
 * Xử lý:
 * - Viết hàm xử lý tính thuế phải trả ở các khoản 0 - 60, 60 - 120, 120 - 210, 210 - 384, 384 - 624, 624 - 960, 960 trở lên
 * - Tính tổng thuế thu nhập cá nhân theo năm
 * Đầu ra:
 * - Hiển thị tiền thuế TNCN phải trả
 */

function thue60(thuNhapChiuThue) {
  return thuNhapChiuThue * 0.05;
}

function thue60_120(thuNhapChiuThue) {
  return (thuNhapChiuThue - 60) * 0.1;
}

function thue120_210(thuNhapChiuThue) {
  return (thuNhapChiuThue - 120) * 0.15;
}

function thue210_384(thuNhapChiuThue) {
  return (thuNhapChiuThue - 210) * 0.2;
}

function thue384_624(thuNhapChiuThue) {
  return (thuNhapChiuThue - 384) * 0.25;
}

function thue624_960(thuNhapChiuThue) {
  return (thuNhapChiuThue - 624) * 0.3;
}

function thue960(thuNhapChiuThue) {
  return (thuNhapChiuThue - 960) * 0.35;
}

getEle("tinhThue").onclick = function () {
  var hoTen = getEle("hoTen");
  var tongThuNhap = getEle("tongThuNhap").value / 1000000;
  var soNguoiPhuThuoc = getEle("soNguoiPhuThuoc").value * 1;
  var tongThuNhapChiuThue = tongThuNhap - 4 - soNguoiPhuThuoc * 1.6;
  var thueNam = 0;
  if (0 < tongThuNhapChiuThue && tongThuNhapChiuThue <= 60) {
    thueNam = thue60(tongThuNhapChiuThue);
  } else if (60 < tongThuNhapChiuThue && tongThuNhapChiuThue <= 120) {
    thueNam = thue60(60);
    thueNam += thue60_120(tongThuNhapChiuThue);
  } else if (120 < tongThuNhapChiuThue && tongThuNhapChiuThue <= 210) {
    thueNam = thue60(60);
    thueNam += thue60_120(120);
    thueNam += thue120_210(tongThuNhapChiuThue);
  } else if (210 < tongThuNhapChiuThue && tongThuNhapChiuThue <= 384) {
    thueNam = thue60(60);
    thueNam += thue60_120(120);
    thueNam += thue120_210(210);
    thueNam += thue210_384(tongThuNhapChiuThue);
  } else if (384 < tongThuNhapChiuThue && tongThuNhapChiuThue <= 624) {
    thueNam = thue60(60);
    thueNam += thue60_120(120);
    thueNam += thue120_210(210);
    thueNam += thue210_384(384);
    thueNam += thue384_624(tongThuNhapChiuThue);
  } else if (624 < tongThuNhapChiuThue && tongThuNhapChiuThue <= 960) {
    thueNam = thue60(60);
    thueNam += thue60_120(120);
    thueNam += thue120_210(210);
    thueNam += thue210_384(384);
    thueNam += thue384_624(624);
    thueNam += thue624_960(tongThuNhapChiuThue);
  } else if (tongThuNhapChiuThue > 960) {
    thueNam = thue60(60);
    thueNam += thue60_120(120);
    thueNam += thue120_210(210);
    thueNam += thue210_384(384);
    thueNam += thue384_624(624);
    thueNam += thue624_960(960);
    thueNam += thue960(tongThuNhapChiuThue);
  }
  var thue =
    "Tiền thuế thu nhập cá nhân: " + numberFormat.format(thueNam * 1000000);
  getEle("tienThue").innerHTML = thue;
};
/**
 * BÀI 4
 * Đầu vào:
 * - Nhập các hằng số về phí xử lý hóa đơn, phí dịch vụ cơ bản, kênh cao cấp
 * Xử lý:
 * - Viết hàm kiểm tra loại khách hàng là nhà dân, doanh nghiệp
 * - Công thức tính tiền cáp đối với nhà dân
 * - Công thức tính tiền cáp đối với doanh nghiệp
 * Đầu ra:
 * - Hiển thị số tiền cáp phải trả
 */

const phiXuLyHD_nhaDan = 4.5;
const phiDichVuCoBan_nhaDan = 20.5;
const kenhCaoCap_nhaDan = 7.5;

const phiXuLyHD_doanhNghiep = 15;
const phiDichVuCoBan_doanhNghiep = 75;
const kenhCaoCap_doanhNghiep = 50;

function chonLoaiKhachHang() {
  var nhaDan = getEle("nhaDan");
  var doanhNghiep = getEle("doanhNghiep");

  var loaiKhachHang = "";
  if (doanhNghiep.checked) {
    loaiKhachHang = "doanhNghiep";
    getEle("soKetNoi").disabled = false;
  } else if (nhaDan.checked) {
    loaiKhachHang = "nhaDan";
    getEle("soKetNoi").disabled = true;
  } else {
    alert("Vui lòng chọn loại khách hàng!");
  }
  return loaiKhachHang;
}

getEle("tinhTienCap").onclick = function () {
  var loaiKH = chonLoaiKhachHang();
  var maKhachHang = getEle("maKhachHang").value;
  var soKenhCaoCap = getEle("soKenhCaoCap").value * 1;
  var soKetNoi = getEle("soKetNoi").value * 1;
  var cap = 0;
  switch (loaiKH) {
    case "nhaDan": {
      cap =
        phiXuLyHD_nhaDan +
        phiDichVuCoBan_nhaDan +
        kenhCaoCap_nhaDan * soKenhCaoCap;
      break;
    }
    case "doanhNghiep": {
      if (soKetNoi <= 10) {
        cap =
          phiXuLyHD_doanhNghiep +
          phiDichVuCoBan_doanhNghiep +
          kenhCaoCap_doanhNghiep * soKenhCaoCap;
      } else if (soKetNoi > 10) {
        cap =
          phiXuLyHD_doanhNghiep +
          (phiDichVuCoBan_doanhNghiep + (soKetNoi - 10) * 5) +
          kenhCaoCap_doanhNghiep * soKenhCaoCap;
      }
      break;
    }
    default:
      break;
  }

  var tongTienCap = "Tiền cáp phải thu: " + numberFormat.format(cap) + "$";
  getEle("tienCap").innerHTML = tongTienCap;
};
