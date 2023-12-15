// todo:
//  ENUM TYPEDATA
//  adalah sebuah nilai yang sudah pasti dan tidak berubah nilainya dia bisa juga di konversi jadi number atau string,
//  enum tidak di miliki oleh javascript
export var CustomerType;
(function (CustomerType) {
    CustomerType[CustomerType["REGULAR"] = 0] = "REGULAR";
    CustomerType[CustomerType["GOLD"] = 1] = "GOLD";
    CustomerType[CustomerType["PLATINUM"] = 2] = "PLATINUM";
})(CustomerType || (CustomerType = {}));
