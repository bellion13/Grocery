# Grocery Project

## Giới thiệu

Đây là một project sử dụng React với Vite để xây dựng ứng dụng quản lý hàng hóa và mua sắm thực phẩm. Dự án cung cấp môi trường cấu hình tối thiểu để phát triển ứng dụng React với HMR, ESLint cùng khả năng mở rộng dễ dàng cho nhiều chức năng thực tế.

## Các chức năng chính

- **Quản lý danh sách sản phẩm:** Cho phép thêm, sửa, xóa, và tìm kiếm các loại thực phẩm.
- **Giỏ hàng:** Người dùng có thể thêm sản phẩm vào giỏ, điều chỉnh số lượng, xóa sản phẩm trong giỏ và xem tổng cộng giá trị đơn hàng.
- **Quản lý kho:** Theo dõi số lượng hàng còn trong kho, cảnh báo khi số lượng thấp.
- **Giao diện người dùng thân thiện:** Sử dụng React để xây dựng các component hiển thị sản phẩm, giỏ hàng, thông tin chi tiết và thao tác nhanh gọn.

## Giao diện

- **Trang chủ:** Hiển thị toàn bộ sản phẩm với các nút mua, thêm vào giỏ.
- **Danh mục sản phẩm:** Sắp xếp sản phẩm theo loại, giá hoặc trạng thái khuyến mãi.
- **Giỏ hàng:** Dynamic, hiện thị khi người dùng thêm sản phẩm vào giỏ, cho phép chỉnh sửa trực tiếp.
- **Quản lý kho và kiểm tra số lượng:** Giao diện riêng dành cho việc kiểm tra và cập nhật số lượng hàng trong kho.

## Cấu hình và khởi chạy

- Clone repository này về máy:
  ```bash
  git clone https://github.com/bellion13/Grocery.git
  ```
- Cài đặt các package:
  ```bash
  npm install
  ```
- Khởi động ứng dụng:
  ```bash
  npm run dev
  ```
- Truy cập qua trình duyệt tại địa chỉ `http://localhost:5173` mặc định.

## Công nghệ sử dụng

- **React** & **Vite**: Xây dựng UI hiện đại, nhanh và dễ mở rộng.
- **ESLint**: Đảm bảo chất lượng và phong cách code.
- **Vite Plugins**: Hỗ trợ HMR, Fast Refresh (Babel/SWC).

---

> Thông tin chi tiết về từng chức năng nên được bổ sung trực tiếp tại các thành phần, giao diện hoặc ghi chú mã nguồn trong thư mục `src/`.
