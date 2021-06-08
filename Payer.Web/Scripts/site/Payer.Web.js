var Payer;
(function (Payer) {
    var Administration;
    (function (Administration) {
        var LanguageForm = /** @class */ (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LanguageForm.init) {
                    LanguageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(LanguageForm, [
                        'LanguageId', w0,
                        'LanguageName', w0
                    ]);
                }
                return _this;
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
    })(Administration = Payer.Administration || (Payer.Administration = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
            LanguageRow.deletePermission = 'Administration:Translation';
            LanguageRow.insertPermission = 'Administration:Translation';
            LanguageRow.readPermission = 'Administration:Translation';
            LanguageRow.updatePermission = 'Administration:Translation';
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = Payer.Administration || (Payer.Administration = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = Payer.Administration || (Payer.Administration = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Administration;
    (function (Administration) {
    })(Administration = Payer.Administration || (Payer.Administration = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Administration;
    (function (Administration) {
        var RoleForm = /** @class */ (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RoleForm.init) {
                    RoleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RoleForm, [
                        'RoleName', w0
                    ]);
                }
                return _this;
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
    })(Administration = Payer.Administration || (Payer.Administration = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
            RolePermissionRow.deletePermission = 'Administration:Security';
            RolePermissionRow.insertPermission = 'Administration:Security';
            RolePermissionRow.readPermission = 'Administration:Security';
            RolePermissionRow.updatePermission = 'Administration:Security';
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = Payer.Administration || (Payer.Administration = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = Payer.Administration || (Payer.Administration = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
            RoleRow.deletePermission = 'Administration:Security';
            RoleRow.insertPermission = 'Administration:Security';
            RoleRow.readPermission = 'Administration:Security';
            RoleRow.updatePermission = 'Administration:Security';
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = Payer.Administration || (Payer.Administration = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = Payer.Administration || (Payer.Administration = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            [
                'List',
                'Update'
            ].forEach(function (x) {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = Payer.Administration || (Payer.Administration = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Administration;
    (function (Administration) {
        var UserForm = /** @class */ (function (_super) {
            __extends(UserForm, _super);
            function UserForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UserForm.init) {
                    UserForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.ImageUploadEditor;
                    var w3 = s.PasswordEditor;
                    Q.initFormType(UserForm, [
                        'Username', w0,
                        'DisplayName', w0,
                        'Email', w1,
                        'UserImage', w2,
                        'Password', w3,
                        'PasswordConfirm', w3,
                        'Source', w0
                    ]);
                }
                return _this;
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
    })(Administration = Payer.Administration || (Payer.Administration = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
            UserPermissionRow.deletePermission = 'Administration:Security';
            UserPermissionRow.insertPermission = 'Administration:Security';
            UserPermissionRow.readPermission = 'Administration:Security';
            UserPermissionRow.updatePermission = 'Administration:Security';
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = Payer.Administration || (Payer.Administration = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = Payer.Administration || (Payer.Administration = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
            UserRoleRow.deletePermission = 'Administration:Security';
            UserRoleRow.insertPermission = 'Administration:Security';
            UserRoleRow.readPermission = 'Administration:Security';
            UserRoleRow.updatePermission = 'Administration:Security';
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = Payer.Administration || (Payer.Administration = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = Payer.Administration || (Payer.Administration = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
            UserRow.deletePermission = 'Administration:Security';
            UserRow.insertPermission = 'Administration:Security';
            UserRow.readPermission = 'Administration:Security';
            UserRow.updatePermission = 'Administration:Security';
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = Payer.Administration || (Payer.Administration = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = Payer.Administration || (Payer.Administration = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var BasicSamples;
    (function (BasicSamples) {
        var BasicSamplesService;
        (function (BasicSamplesService) {
            BasicSamplesService.baseUrl = 'BasicSamples/BasicSamples';
            [
                'OrdersByShipper',
                'OrderBulkAction'
            ].forEach(function (x) {
                BasicSamplesService[x] = function (r, s, o) {
                    return Q.serviceRequest(BasicSamplesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BasicSamplesService = BasicSamples.BasicSamplesService || (BasicSamples.BasicSamplesService = {}));
    })(BasicSamples = Payer.BasicSamples || (Payer.BasicSamples = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var BasicSamples;
    (function (BasicSamples) {
        var ChangingLookupTextForm = /** @class */ (function (_super) {
            __extends(ChangingLookupTextForm, _super);
            function ChangingLookupTextForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ChangingLookupTextForm.init) {
                    ChangingLookupTextForm.init = true;
                    var s = Serenity;
                    var w0 = ChangingLookupTextEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.IntegerEditor;
                    Q.initFormType(ChangingLookupTextForm, [
                        'ProductID', w0,
                        'UnitPrice', w1,
                        'Quantity', w2,
                        'Discount', w1
                    ]);
                }
                return _this;
            }
            ChangingLookupTextForm.formKey = 'BasicSamples.ChangingLookupText';
            return ChangingLookupTextForm;
        }(Serenity.PrefixedContext));
        BasicSamples.ChangingLookupTextForm = ChangingLookupTextForm;
    })(BasicSamples = Payer.BasicSamples || (Payer.BasicSamples = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var BasicSamples;
    (function (BasicSamples) {
        var CustomerGrossSalesService;
        (function (CustomerGrossSalesService) {
            CustomerGrossSalesService.baseUrl = 'BasicSamples/CustomerGrossSales';
            [
                'List'
            ].forEach(function (x) {
                CustomerGrossSalesService[x] = function (r, s, o) {
                    return Q.serviceRequest(CustomerGrossSalesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CustomerGrossSalesService = BasicSamples.CustomerGrossSalesService || (BasicSamples.CustomerGrossSalesService = {}));
    })(BasicSamples = Payer.BasicSamples || (Payer.BasicSamples = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var BasicSamples;
    (function (BasicSamples) {
        var DragDropSampleForm = /** @class */ (function (_super) {
            __extends(DragDropSampleForm, _super);
            function DragDropSampleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DragDropSampleForm.init) {
                    DragDropSampleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(DragDropSampleForm, [
                        'Title', w0
                    ]);
                }
                return _this;
            }
            DragDropSampleForm.formKey = 'BasicSamples.DragDropSample';
            return DragDropSampleForm;
        }(Serenity.PrefixedContext));
        BasicSamples.DragDropSampleForm = DragDropSampleForm;
    })(BasicSamples = Payer.BasicSamples || (Payer.BasicSamples = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var BasicSamples;
    (function (BasicSamples) {
        var DragDropSampleRow;
        (function (DragDropSampleRow) {
            DragDropSampleRow.idProperty = 'Id';
            DragDropSampleRow.nameProperty = 'Title';
            DragDropSampleRow.localTextPrefix = 'Northwind.DragDropSample';
            DragDropSampleRow.deletePermission = 'Northwind:General';
            DragDropSampleRow.insertPermission = 'Northwind:General';
            DragDropSampleRow.readPermission = 'Northwind:General';
            DragDropSampleRow.updatePermission = 'Northwind:General';
        })(DragDropSampleRow = BasicSamples.DragDropSampleRow || (BasicSamples.DragDropSampleRow = {}));
    })(BasicSamples = Payer.BasicSamples || (Payer.BasicSamples = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var BasicSamples;
    (function (BasicSamples) {
        var DragDropSampleService;
        (function (DragDropSampleService) {
            DragDropSampleService.baseUrl = 'BasicSamples/DragDropSample';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DragDropSampleService[x] = function (r, s, o) {
                    return Q.serviceRequest(DragDropSampleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DragDropSampleService = BasicSamples.DragDropSampleService || (BasicSamples.DragDropSampleService = {}));
    })(BasicSamples = Payer.BasicSamples || (Payer.BasicSamples = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var BasicSamples;
    (function (BasicSamples) {
        var FilteredLookupInDetailForm = /** @class */ (function (_super) {
            __extends(FilteredLookupInDetailForm, _super);
            function FilteredLookupInDetailForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!FilteredLookupInDetailForm.init) {
                    FilteredLookupInDetailForm.init = true;
                    var s = Serenity;
                    var w0 = Northwind.CustomerEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.LookupEditor;
                    var w3 = FilteredLookupDetailEditor;
                    Q.initFormType(FilteredLookupInDetailForm, [
                        'CustomerID', w0,
                        'OrderDate', w1,
                        'CategoryID', w2,
                        'DetailList', w3
                    ]);
                }
                return _this;
            }
            FilteredLookupInDetailForm.formKey = 'BasicSamples.FilteredLookupInDetail';
            return FilteredLookupInDetailForm;
        }(Serenity.PrefixedContext));
        BasicSamples.FilteredLookupInDetailForm = FilteredLookupInDetailForm;
    })(BasicSamples = Payer.BasicSamples || (Payer.BasicSamples = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var BasicSamples;
    (function (BasicSamples) {
        var HardcodedValuesForm = /** @class */ (function (_super) {
            __extends(HardcodedValuesForm, _super);
            function HardcodedValuesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!HardcodedValuesForm.init) {
                    HardcodedValuesForm.init = true;
                    var s = Serenity;
                    var w0 = HardcodedValuesEditor;
                    Q.initFormType(HardcodedValuesForm, [
                        'SomeValue', w0
                    ]);
                }
                return _this;
            }
            HardcodedValuesForm.formKey = 'BasicSamples.HarcodedValues';
            return HardcodedValuesForm;
        }(Serenity.PrefixedContext));
        BasicSamples.HardcodedValuesForm = HardcodedValuesForm;
    })(BasicSamples = Payer.BasicSamples || (Payer.BasicSamples = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var BasicSamples;
    (function (BasicSamples) {
        var LookupFilterByMultipleForm = /** @class */ (function (_super) {
            __extends(LookupFilterByMultipleForm, _super);
            function LookupFilterByMultipleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LookupFilterByMultipleForm.init) {
                    LookupFilterByMultipleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.ImageUploadEditor;
                    var w2 = s.BooleanEditor;
                    var w3 = s.LookupEditor;
                    var w4 = ProduceSeafoodCategoryEditor;
                    var w5 = s.DecimalEditor;
                    var w6 = s.IntegerEditor;
                    Q.initFormType(LookupFilterByMultipleForm, [
                        'ProductName', w0,
                        'ProductImage', w1,
                        'Discontinued', w2,
                        'SupplierID', w3,
                        'CategoryID', w4,
                        'QuantityPerUnit', w0,
                        'UnitPrice', w5,
                        'UnitsInStock', w6,
                        'UnitsOnOrder', w6,
                        'ReorderLevel', w6
                    ]);
                }
                return _this;
            }
            LookupFilterByMultipleForm.formKey = 'BasicSamples.LookupFilterByMultiple';
            return LookupFilterByMultipleForm;
        }(Serenity.PrefixedContext));
        BasicSamples.LookupFilterByMultipleForm = LookupFilterByMultipleForm;
    })(BasicSamples = Payer.BasicSamples || (Payer.BasicSamples = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var BasicSamples;
    (function (BasicSamples) {
        var PopulateLinkedDataForm = /** @class */ (function (_super) {
            __extends(PopulateLinkedDataForm, _super);
            function PopulateLinkedDataForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PopulateLinkedDataForm.init) {
                    PopulateLinkedDataForm.init = true;
                    var s = Serenity;
                    var w0 = Northwind.CustomerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.LookupEditor;
                    var w4 = Northwind.OrderDetailsEditor;
                    Q.initFormType(PopulateLinkedDataForm, [
                        'CustomerID', w0,
                        'CustomerContactName', w1,
                        'CustomerContactTitle', w1,
                        'CustomerCity', w1,
                        'CustomerRegion', w1,
                        'CustomerCountry', w1,
                        'CustomerPhone', w1,
                        'CustomerFax', w1,
                        'OrderDate', w2,
                        'RequiredDate', w2,
                        'EmployeeID', w3,
                        'DetailList', w4
                    ]);
                }
                return _this;
            }
            PopulateLinkedDataForm.formKey = 'BasicSamples.PopulateLinkedData';
            return PopulateLinkedDataForm;
        }(Serenity.PrefixedContext));
        BasicSamples.PopulateLinkedDataForm = PopulateLinkedDataForm;
    })(BasicSamples = Payer.BasicSamples || (Payer.BasicSamples = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var BasicSamples;
    (function (BasicSamples) {
        var ProductExcelImportForm = /** @class */ (function (_super) {
            __extends(ProductExcelImportForm, _super);
            function ProductExcelImportForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ProductExcelImportForm.init) {
                    ProductExcelImportForm.init = true;
                    var s = Serenity;
                    var w0 = s.ImageUploadEditor;
                    Q.initFormType(ProductExcelImportForm, [
                        'FileName', w0
                    ]);
                }
                return _this;
            }
            ProductExcelImportForm.formKey = 'BasicSamples.ProductExcelImport';
            return ProductExcelImportForm;
        }(Serenity.PrefixedContext));
        BasicSamples.ProductExcelImportForm = ProductExcelImportForm;
    })(BasicSamples = Payer.BasicSamples || (Payer.BasicSamples = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var BasicSamples;
    (function (BasicSamples) {
        var ProductExcelImportService;
        (function (ProductExcelImportService) {
            ProductExcelImportService.baseUrl = 'BasicSamples/ProductExcelImport';
            [
                'ExcelImport'
            ].forEach(function (x) {
                ProductExcelImportService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProductExcelImportService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProductExcelImportService = BasicSamples.ProductExcelImportService || (BasicSamples.ProductExcelImportService = {}));
    })(BasicSamples = Payer.BasicSamples || (Payer.BasicSamples = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var BasicSamples;
    (function (BasicSamples) {
        var StaticTextBlockForm = /** @class */ (function (_super) {
            __extends(StaticTextBlockForm, _super);
            function StaticTextBlockForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!StaticTextBlockForm.init) {
                    StaticTextBlockForm.init = true;
                    var s = Serenity;
                    var w0 = Payer.StaticTextBlock;
                    var w1 = s.StringEditor;
                    Q.initFormType(StaticTextBlockForm, [
                        'StaticText', w0,
                        'SomeInput', w1,
                        'HtmlList', w0,
                        'FromLocalText', w0,
                        'DisplayFieldValue', w0
                    ]);
                }
                return _this;
            }
            StaticTextBlockForm.formKey = 'BasicSamples.StaticTextBlock';
            return StaticTextBlockForm;
        }(Serenity.PrefixedContext));
        BasicSamples.StaticTextBlockForm = StaticTextBlockForm;
    })(BasicSamples = Payer.BasicSamples || (Payer.BasicSamples = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var BasicSamples;
    (function (BasicSamples) {
        var VSGalleryQAService;
        (function (VSGalleryQAService) {
            VSGalleryQAService.baseUrl = 'BasicSamples/VSGalleryQA';
            [
                'List'
            ].forEach(function (x) {
                VSGalleryQAService[x] = function (r, s, o) {
                    return Q.serviceRequest(VSGalleryQAService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(VSGalleryQAService = BasicSamples.VSGalleryQAService || (BasicSamples.VSGalleryQAService = {}));
    })(BasicSamples = Payer.BasicSamples || (Payer.BasicSamples = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
            UserPreferenceRow.deletePermission = '';
            UserPreferenceRow.insertPermission = '';
            UserPreferenceRow.readPermission = '';
            UserPreferenceRow.updatePermission = '';
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = Payer.Common || (Payer.Common = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            [
                'Update',
                'Retrieve'
            ].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = Payer.Common || (Payer.Common = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Default;
    (function (Default) {
        var CustomerTablesForm = /** @class */ (function (_super) {
            __extends(CustomerTablesForm, _super);
            function CustomerTablesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CustomerTablesForm.init) {
                    CustomerTablesForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.BooleanEditor;
                    Q.initFormType(CustomerTablesForm, [
                        'Number', w0,
                        'Places', w0,
                        'Accessible', w1
                    ]);
                }
                return _this;
            }
            CustomerTablesForm.formKey = 'Default.CustomerTables';
            return CustomerTablesForm;
        }(Serenity.PrefixedContext));
        Default.CustomerTablesForm = CustomerTablesForm;
    })(Default = Payer.Default || (Payer.Default = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Default;
    (function (Default) {
        var CustomerTablesRow;
        (function (CustomerTablesRow) {
            CustomerTablesRow.idProperty = 'Id';
            CustomerTablesRow.localTextPrefix = 'Default.CustomerTables';
            CustomerTablesRow.deletePermission = 'Administration:General';
            CustomerTablesRow.insertPermission = 'Administration:General';
            CustomerTablesRow.readPermission = 'Administration:General';
            CustomerTablesRow.updatePermission = 'Administration:General';
        })(CustomerTablesRow = Default.CustomerTablesRow || (Default.CustomerTablesRow = {}));
    })(Default = Payer.Default || (Payer.Default = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Default;
    (function (Default) {
        var CustomerTablesService;
        (function (CustomerTablesService) {
            CustomerTablesService.baseUrl = 'Default/CustomerTables';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CustomerTablesService[x] = function (r, s, o) {
                    return Q.serviceRequest(CustomerTablesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CustomerTablesService = Default.CustomerTablesService || (Default.CustomerTablesService = {}));
    })(Default = Payer.Default || (Payer.Default = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Default;
    (function (Default) {
        var CustomersForm = /** @class */ (function (_super) {
            __extends(CustomersForm, _super);
            function CustomersForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CustomersForm.init) {
                    CustomersForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    Q.initFormType(CustomersForm, [
                        'ClubMember', w0,
                        'PersonId', w1
                    ]);
                }
                return _this;
            }
            CustomersForm.formKey = 'Default.Customers';
            return CustomersForm;
        }(Serenity.PrefixedContext));
        Default.CustomersForm = CustomersForm;
    })(Default = Payer.Default || (Payer.Default = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Default;
    (function (Default) {
        var CustomersRow;
        (function (CustomersRow) {
            CustomersRow.idProperty = 'Id';
            CustomersRow.nameProperty = 'ClubMember';
            CustomersRow.localTextPrefix = 'Default.Customers';
            CustomersRow.deletePermission = 'Administration:General';
            CustomersRow.insertPermission = 'Administration:General';
            CustomersRow.readPermission = 'Administration:General';
            CustomersRow.updatePermission = 'Administration:General';
        })(CustomersRow = Default.CustomersRow || (Default.CustomersRow = {}));
    })(Default = Payer.Default || (Payer.Default = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Default;
    (function (Default) {
        var CustomersService;
        (function (CustomersService) {
            CustomersService.baseUrl = 'Default/Customers';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CustomersService[x] = function (r, s, o) {
                    return Q.serviceRequest(CustomersService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CustomersService = Default.CustomersService || (Default.CustomersService = {}));
    })(Default = Payer.Default || (Payer.Default = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Default;
    (function (Default) {
        var ItemsForm = /** @class */ (function (_super) {
            __extends(ItemsForm, _super);
            function ItemsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ItemsForm.init) {
                    ItemsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DecimalEditor;
                    Q.initFormType(ItemsForm, [
                        'Name', w0,
                        'Price', w1
                    ]);
                }
                return _this;
            }
            ItemsForm.formKey = 'Default.Items';
            return ItemsForm;
        }(Serenity.PrefixedContext));
        Default.ItemsForm = ItemsForm;
    })(Default = Payer.Default || (Payer.Default = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Default;
    (function (Default) {
        var ItemsRow;
        (function (ItemsRow) {
            ItemsRow.idProperty = 'Id';
            ItemsRow.nameProperty = 'Name';
            ItemsRow.localTextPrefix = 'Default.Items';
            ItemsRow.deletePermission = 'Administration:General';
            ItemsRow.insertPermission = 'Administration:General';
            ItemsRow.readPermission = 'Administration:General';
            ItemsRow.updatePermission = 'Administration:General';
        })(ItemsRow = Default.ItemsRow || (Default.ItemsRow = {}));
    })(Default = Payer.Default || (Payer.Default = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Default;
    (function (Default) {
        var ItemsService;
        (function (ItemsService) {
            ItemsService.baseUrl = 'Default/Items';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ItemsService[x] = function (r, s, o) {
                    return Q.serviceRequest(ItemsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ItemsService = Default.ItemsService || (Default.ItemsService = {}));
    })(Default = Payer.Default || (Payer.Default = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Default;
    (function (Default) {
        var MailsMessagesForm = /** @class */ (function (_super) {
            __extends(MailsMessagesForm, _super);
            function MailsMessagesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MailsMessagesForm.init) {
                    MailsMessagesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    Q.initFormType(MailsMessagesForm, [
                        'Body', w0,
                        'Subject', w0,
                        'CustomerId', w1
                    ]);
                }
                return _this;
            }
            MailsMessagesForm.formKey = 'Default.MailsMessages';
            return MailsMessagesForm;
        }(Serenity.PrefixedContext));
        Default.MailsMessagesForm = MailsMessagesForm;
    })(Default = Payer.Default || (Payer.Default = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Default;
    (function (Default) {
        var MailsMessagesRow;
        (function (MailsMessagesRow) {
            MailsMessagesRow.idProperty = 'Id';
            MailsMessagesRow.nameProperty = 'Body';
            MailsMessagesRow.localTextPrefix = 'Default.MailsMessages';
            MailsMessagesRow.deletePermission = 'Administration:General';
            MailsMessagesRow.insertPermission = 'Administration:General';
            MailsMessagesRow.readPermission = 'Administration:General';
            MailsMessagesRow.updatePermission = 'Administration:General';
        })(MailsMessagesRow = Default.MailsMessagesRow || (Default.MailsMessagesRow = {}));
    })(Default = Payer.Default || (Payer.Default = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Default;
    (function (Default) {
        var MailsMessagesService;
        (function (MailsMessagesService) {
            MailsMessagesService.baseUrl = 'Default/MailsMessages';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MailsMessagesService[x] = function (r, s, o) {
                    return Q.serviceRequest(MailsMessagesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MailsMessagesService = Default.MailsMessagesService || (Default.MailsMessagesService = {}));
    })(Default = Payer.Default || (Payer.Default = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Default;
    (function (Default) {
        var PersonsForm = /** @class */ (function (_super) {
            __extends(PersonsForm, _super);
            function PersonsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PersonsForm.init) {
                    PersonsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    Q.initFormType(PersonsForm, [
                        'Name', w0,
                        'Birthday', w1,
                        'Phone', w0,
                        'Address', w0,
                        'Email', w0
                    ]);
                }
                return _this;
            }
            PersonsForm.formKey = 'Default.Persons';
            return PersonsForm;
        }(Serenity.PrefixedContext));
        Default.PersonsForm = PersonsForm;
    })(Default = Payer.Default || (Payer.Default = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Default;
    (function (Default) {
        var PersonsRow;
        (function (PersonsRow) {
            PersonsRow.idProperty = 'Id';
            PersonsRow.nameProperty = 'Name';
            PersonsRow.localTextPrefix = 'Default.Persons';
            PersonsRow.deletePermission = 'Administration:General';
            PersonsRow.insertPermission = 'Administration:General';
            PersonsRow.readPermission = 'Administration:General';
            PersonsRow.updatePermission = 'Administration:General';
        })(PersonsRow = Default.PersonsRow || (Default.PersonsRow = {}));
    })(Default = Payer.Default || (Payer.Default = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Default;
    (function (Default) {
        var PersonsService;
        (function (PersonsService) {
            PersonsService.baseUrl = 'Default/Persons';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PersonsService[x] = function (r, s, o) {
                    return Q.serviceRequest(PersonsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PersonsService = Default.PersonsService || (Default.PersonsService = {}));
    })(Default = Payer.Default || (Payer.Default = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Default;
    (function (Default) {
        var TipsForm = /** @class */ (function (_super) {
            __extends(TipsForm, _super);
            function TipsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TipsForm.init) {
                    TipsForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DecimalEditor;
                    Q.initFormType(TipsForm, [
                        'Date', w0,
                        'WaiterId', w1,
                        'Value', w2
                    ]);
                }
                return _this;
            }
            TipsForm.formKey = 'Default.Tips';
            return TipsForm;
        }(Serenity.PrefixedContext));
        Default.TipsForm = TipsForm;
    })(Default = Payer.Default || (Payer.Default = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Default;
    (function (Default) {
        var TipsRow;
        (function (TipsRow) {
            TipsRow.idProperty = 'Id';
            TipsRow.localTextPrefix = 'Default.Tips';
            TipsRow.deletePermission = 'Administration:General';
            TipsRow.insertPermission = 'Administration:General';
            TipsRow.readPermission = 'Administration:General';
            TipsRow.updatePermission = 'Administration:General';
        })(TipsRow = Default.TipsRow || (Default.TipsRow = {}));
    })(Default = Payer.Default || (Payer.Default = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Default;
    (function (Default) {
        var TipsService;
        (function (TipsService) {
            TipsService.baseUrl = 'Default/Tips';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TipsService[x] = function (r, s, o) {
                    return Q.serviceRequest(TipsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TipsService = Default.TipsService || (Default.TipsService = {}));
    })(Default = Payer.Default || (Payer.Default = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Default;
    (function (Default) {
        var TransactionItemsForm = /** @class */ (function (_super) {
            __extends(TransactionItemsForm, _super);
            function TransactionItemsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TransactionItemsForm.init) {
                    TransactionItemsForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.DecimalEditor;
                    Q.initFormType(TransactionItemsForm, [
                        'TransactionId', w0,
                        'ItemId', w0,
                        'CustomerId', w0,
                        'TotalPaid', w1
                    ]);
                }
                return _this;
            }
            TransactionItemsForm.formKey = 'Default.TransactionItems';
            return TransactionItemsForm;
        }(Serenity.PrefixedContext));
        Default.TransactionItemsForm = TransactionItemsForm;
    })(Default = Payer.Default || (Payer.Default = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Default;
    (function (Default) {
        var TransactionItemsRow;
        (function (TransactionItemsRow) {
            TransactionItemsRow.idProperty = 'Id';
            TransactionItemsRow.localTextPrefix = 'Default.TransactionItems';
            TransactionItemsRow.deletePermission = 'Administration:General';
            TransactionItemsRow.insertPermission = 'Administration:General';
            TransactionItemsRow.readPermission = 'Administration:General';
            TransactionItemsRow.updatePermission = 'Administration:General';
        })(TransactionItemsRow = Default.TransactionItemsRow || (Default.TransactionItemsRow = {}));
    })(Default = Payer.Default || (Payer.Default = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Default;
    (function (Default) {
        var TransactionItemsService;
        (function (TransactionItemsService) {
            TransactionItemsService.baseUrl = 'Default/TransactionItems';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TransactionItemsService[x] = function (r, s, o) {
                    return Q.serviceRequest(TransactionItemsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TransactionItemsService = Default.TransactionItemsService || (Default.TransactionItemsService = {}));
    })(Default = Payer.Default || (Payer.Default = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Default;
    (function (Default) {
        var TransactionsForm = /** @class */ (function (_super) {
            __extends(TransactionsForm, _super);
            function TransactionsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TransactionsForm.init) {
                    TransactionsForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(TransactionsForm, [
                        'CustomerTableId', w0,
                        'NoOfCustomers', w0,
                        'QrCode', w1,
                        'DealNum', w1,
                        'WaiterId', w0,
                        'ItemId', w0,
                        'Created', w2,
                        'Closed', w2
                    ]);
                }
                return _this;
            }
            TransactionsForm.formKey = 'Default.Transactions';
            return TransactionsForm;
        }(Serenity.PrefixedContext));
        Default.TransactionsForm = TransactionsForm;
    })(Default = Payer.Default || (Payer.Default = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Default;
    (function (Default) {
        var TransactionsRow;
        (function (TransactionsRow) {
            TransactionsRow.idProperty = 'Id';
            TransactionsRow.nameProperty = 'QrCode';
            TransactionsRow.localTextPrefix = 'Default.Transactions';
            TransactionsRow.deletePermission = 'Administration:General';
            TransactionsRow.insertPermission = 'Administration:General';
            TransactionsRow.readPermission = 'Administration:General';
            TransactionsRow.updatePermission = 'Administration:General';
        })(TransactionsRow = Default.TransactionsRow || (Default.TransactionsRow = {}));
    })(Default = Payer.Default || (Payer.Default = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Default;
    (function (Default) {
        var TransactionsService;
        (function (TransactionsService) {
            TransactionsService.baseUrl = 'Default/Transactions';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TransactionsService[x] = function (r, s, o) {
                    return Q.serviceRequest(TransactionsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TransactionsService = Default.TransactionsService || (Default.TransactionsService = {}));
    })(Default = Payer.Default || (Payer.Default = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Default;
    (function (Default) {
        var WaitersForm = /** @class */ (function (_super) {
            __extends(WaitersForm, _super);
            function WaitersForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!WaitersForm.init) {
                    WaitersForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    Q.initFormType(WaitersForm, [
                        'UserId', w0,
                        'PersonId', w0
                    ]);
                }
                return _this;
            }
            WaitersForm.formKey = 'Default.Waiters';
            return WaitersForm;
        }(Serenity.PrefixedContext));
        Default.WaitersForm = WaitersForm;
    })(Default = Payer.Default || (Payer.Default = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Default;
    (function (Default) {
        var WaitersRow;
        (function (WaitersRow) {
            WaitersRow.idProperty = 'Id';
            WaitersRow.localTextPrefix = 'Default.Waiters';
            WaitersRow.deletePermission = 'Administration:General';
            WaitersRow.insertPermission = 'Administration:General';
            WaitersRow.readPermission = 'Administration:General';
            WaitersRow.updatePermission = 'Administration:General';
        })(WaitersRow = Default.WaitersRow || (Default.WaitersRow = {}));
    })(Default = Payer.Default || (Payer.Default = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Default;
    (function (Default) {
        var WaitersService;
        (function (WaitersService) {
            WaitersService.baseUrl = 'Default/Waiters';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                WaitersService[x] = function (r, s, o) {
                    return Q.serviceRequest(WaitersService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(WaitersService = Default.WaitersService || (Default.WaitersService = {}));
    })(Default = Payer.Default || (Payer.Default = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = /** @class */ (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ChangePasswordForm.init) {
                    ChangePasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ChangePasswordForm, [
                        'OldPassword', w0,
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
    })(Membership = Payer.Membership || (Payer.Membership = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = /** @class */ (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ForgotPasswordForm.init) {
                    ForgotPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.EmailEditor;
                    Q.initFormType(ForgotPasswordForm, [
                        'Email', w0
                    ]);
                }
                return _this;
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
    })(Membership = Payer.Membership || (Payer.Membership = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Membership;
    (function (Membership) {
        var LoginForm = /** @class */ (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LoginForm.init) {
                    LoginForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.PasswordEditor;
                    Q.initFormType(LoginForm, [
                        'Username', w0,
                        'Password', w1
                    ]);
                }
                return _this;
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
    })(Membership = Payer.Membership || (Payer.Membership = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = /** @class */ (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ResetPasswordForm.init) {
                    ResetPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ResetPasswordForm, [
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
    })(Membership = Payer.Membership || (Payer.Membership = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Membership;
    (function (Membership) {
        var SignUpForm = /** @class */ (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SignUpForm.init) {
                    SignUpForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.PasswordEditor;
                    Q.initFormType(SignUpForm, [
                        'DisplayName', w0,
                        'Email', w1,
                        'ConfirmEmail', w1,
                        'Password', w2,
                        'ConfirmPassword', w2
                    ]);
                }
                return _this;
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
    })(Membership = Payer.Membership || (Payer.Membership = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Texts;
    (function (Texts) {
        Payer['Texts'] = Q.proxyTexts(Texts, '', { Db: { Administration: { Language: { Id: 1, LanguageId: 1, LanguageName: 1 }, Role: { RoleId: 1, RoleName: 1 }, RolePermission: { PermissionKey: 1, RoleId: 1, RolePermissionId: 1, RoleRoleName: 1 }, Translation: { CustomText: 1, EntityPlural: 1, Key: 1, OverrideConfirmation: 1, SaveChangesButton: 1, SourceLanguage: 1, SourceText: 1, TargetLanguage: 1, TargetText: 1 }, User: { DisplayName: 1, Email: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastDirectoryUpdate: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, Source: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1 }, UserPermission: { Granted: 1, PermissionKey: 1, User: 1, UserId: 1, UserPermissionId: 1, Username: 1 }, UserRole: { RoleId: 1, User: 1, UserId: 1, UserRoleId: 1, Username: 1 } }, Common: { UserPreference: { Name: 1, PreferenceType: 1, UserId: 1, UserPreferenceId: 1, Value: 1 } }, Default: { CustomerTables: { Accessible: 1, Id: 1, Number: 1, Places: 1 }, Customers: { ClubMember: 1, Id: 1, PersonAddress: 1, PersonBirthday: 1, PersonEmail: 1, PersonId: 1, PersonName: 1, PersonPhone: 1 }, Items: { Id: 1, Name: 1, Price: 1 }, MailsMessages: { Body: 1, CustomerClubMember: 1, CustomerId: 1, CustomerPersonId: 1, Id: 1, Subject: 1 }, Persons: { Address: 1, Birthday: 1, Email: 1, Id: 1, Name: 1, Phone: 1 }, Tips: { Date: 1, Id: 1, Value: 1, WaiterId: 1, WaiterPersonId: 1, WaiterUserId: 1 }, TransactionItems: { CustomerClubMember: 1, CustomerId: 1, CustomerPersonId: 1, Id: 1, ItemId: 1, ItemName: 1, ItemPrice: 1, TotalPaid: 1, TransactionClosed: 1, TransactionCreated: 1, TransactionCustomerTableId: 1, TransactionDealNum: 1, TransactionId: 1, TransactionItemId: 1, TransactionNoOfCustomers: 1, TransactionQrCode: 1, TransactionWaiterId: 1 }, Transactions: { Closed: 1, Created: 1, CustomerTableAccessible: 1, CustomerTableId: 1, CustomerTableNumber: 1, CustomerTablePlaces: 1, DealNum: 1, GenerateQrCode: 1, Id: 1, ItemId: 1, ItemName: 1, ItemPrice: 1, NoOfCustomers: 1, QrCode: 1, WaiterId: 1, WaiterPersonId: 1, WaiterUserId: 1 }, Waiters: { Id: 1, PersonAddress: 1, PersonBirthday: 1, PersonEmail: 1, PersonId: 1, PersonName: 1, PersonPhone: 1, UserId: 1 } }, Northwind: { Category: { CategoryID: 1, CategoryName: 1, Description: 1, Picture: 1 }, CategoryLang: { CategoryId: 1, CategoryName: 1, Description: 1, Id: 1, LanguageId: 1 }, Customer: { Address: 1, City: 1, CompanyName: 1, ContactName: 1, ContactTitle: 1, Country: 1, CustomerID: 1, Email: 1, Fax: 1, ID: 1, LastContactDate: 1, LastContactedBy: 1, NoteList: 1, Phone: 1, PostalCode: 1, Region: 1, Representatives: 1, SendBulletin: 1 }, CustomerCustomerDemo: { CustomerAddress: 1, CustomerCity: 1, CustomerCompanyName: 1, CustomerContactName: 1, CustomerContactTitle: 1, CustomerCountry: 1, CustomerFax: 1, CustomerID: 1, CustomerPhone: 1, CustomerPostalCode: 1, CustomerRegion: 1, CustomerTypeCustomerDesc: 1, CustomerTypeID: 1, ID: 1 }, CustomerDemographic: { CustomerDesc: 1, CustomerTypeID: 1, ID: 1 }, CustomerDetails: { Email: 1, Id: 1, LastContactDate: 1, LastContactedBy: 1, LastContactedByAddress: 1, LastContactedByBirthDate: 1, LastContactedByCity: 1, LastContactedByCountry: 1, LastContactedByExtension: 1, LastContactedByFirstName: 1, LastContactedByHireDate: 1, LastContactedByHomePhone: 1, LastContactedByLastName: 1, LastContactedByNotes: 1, LastContactedByPhoto: 1, LastContactedByPhotoPath: 1, LastContactedByPostalCode: 1, LastContactedByRegion: 1, LastContactedByReportsTo: 1, LastContactedByTitle: 1, LastContactedByTitleOfCourtesy: 1, SendBulletin: 1 }, CustomerGrossSales: { ContactName: 1, CustomerId: 1, GrossAmount: 1, ProductId: 1, ProductName: 1 }, CustomerRepresentatives: { CustomerId: 1, EmployeeId: 1, RepresentativeId: 1 }, DragDropSample: { Id: 1, ParentId: 1, Title: 1 }, Employee: { Address: 1, BirthDate: 1, City: 1, Country: 1, EmployeeID: 1, Extension: 1, FirstName: 1, FullName: 1, Gender: 1, HireDate: 1, HomePhone: 1, LastName: 1, Notes: 1, Photo: 1, PhotoPath: 1, PostalCode: 1, Region: 1, ReportsTo: 1, ReportsToAddress: 1, ReportsToBirthDate: 1, ReportsToCity: 1, ReportsToCountry: 1, ReportsToExtension: 1, ReportsToFirstName: 1, ReportsToFullName: 1, ReportsToHireDate: 1, ReportsToHomePhone: 1, ReportsToLastName: 1, ReportsToNotes: 1, ReportsToPhoto: 1, ReportsToPhotoPath: 1, ReportsToPostalCode: 1, ReportsToRegion: 1, ReportsToReportsTo: 1, ReportsToTitle: 1, ReportsToTitleOfCourtesy: 1, Title: 1, TitleOfCourtesy: 1 }, EmployeeTerritory: { EmployeeAddress: 1, EmployeeBirthDate: 1, EmployeeCity: 1, EmployeeCountry: 1, EmployeeExtension: 1, EmployeeFirstName: 1, EmployeeHireDate: 1, EmployeeHomePhone: 1, EmployeeID: 1, EmployeeLastName: 1, EmployeeNotes: 1, EmployeePhoto: 1, EmployeePhotoPath: 1, EmployeePostalCode: 1, EmployeeRegion: 1, EmployeeReportsTo: 1, EmployeeTitle: 1, EmployeeTitleOfCourtesy: 1, TerritoryID: 1, TerritoryRegionID: 1, TerritoryTerritoryDescription: 1 }, Note: { EntityId: 1, EntityType: 1, InsertDate: 1, InsertUserDisplayName: 1, InsertUserId: 1, NoteId: 1, Text: 1 }, Order: { CustomerCity: 1, CustomerCompanyName: 1, CustomerContactName: 1, CustomerContactTitle: 1, CustomerCountry: 1, CustomerFax: 1, CustomerID: 1, CustomerPhone: 1, CustomerRegion: 1, DetailList: 1, EmployeeFullName: 1, EmployeeGender: 1, EmployeeID: 1, EmployeeReportsToFullName: 1, Freight: 1, OrderDate: 1, OrderID: 1, RequiredDate: 1, ShipAddress: 1, ShipCity: 1, ShipCountry: 1, ShipName: 1, ShipPostalCode: 1, ShipRegion: 1, ShipVia: 1, ShipViaCompanyName: 1, ShipViaPhone: 1, ShippedDate: 1, ShippingState: 1 }, OrderDetail: { DetailID: 1, Discount: 1, LineTotal: 1, OrderCustomerID: 1, OrderDate: 1, OrderEmployeeID: 1, OrderID: 1, OrderShipCity: 1, OrderShipCountry: 1, OrderShipVia: 1, OrderShippedDate: 1, ProductDiscontinued: 1, ProductID: 1, ProductName: 1, ProductQuantityPerUnit: 1, ProductSupplierID: 1, ProductUnitPrice: 1, Quantity: 1, UnitPrice: 1 }, Product: { CategoryDescription: 1, CategoryID: 1, CategoryName: 1, CategoryPicture: 1, Discontinued: 1, ProductID: 1, ProductImage: 1, ProductName: 1, QuantityPerUnit: 1, ReorderLevel: 1, SupplierAddress: 1, SupplierCity: 1, SupplierCompanyName: 1, SupplierContactName: 1, SupplierContactTitle: 1, SupplierCountry: 1, SupplierFax: 1, SupplierHomePage: 1, SupplierID: 1, SupplierPhone: 1, SupplierPostalCode: 1, SupplierRegion: 1, UnitPrice: 1, UnitsInStock: 1, UnitsOnOrder: 1 }, ProductLang: { Id: 1, LanguageId: 1, ProductId: 1, ProductName: 1 }, ProductLog: { CategoryID: 1, ChangingUserId: 1, Discontinued: 1, OperationType: 1, ProductID: 1, ProductImage: 1, ProductLogID: 1, ProductName: 1, QuantityPerUnit: 1, ReorderLevel: 1, SupplierID: 1, UnitPrice: 1, UnitsInStock: 1, UnitsOnOrder: 1, ValidFrom: 1, ValidUntil: 1 }, Region: { RegionDescription: 1, RegionID: 1 }, SalesByCategory: { CategoryId: 1, CategoryName: 1, ProductName: 1, ProductSales: 1 }, Shipper: { CompanyName: 1, Phone: 1, ShipperID: 1 }, Supplier: { Address: 1, City: 1, CompanyName: 1, ContactName: 1, ContactTitle: 1, Country: 1, Fax: 1, HomePage: 1, Phone: 1, PostalCode: 1, Region: 1, SupplierID: 1 }, Territory: { ID: 1, RegionDescription: 1, RegionID: 1, TerritoryDescription: 1, TerritoryID: 1 } } }, Forms: { Membership: { ChangePassword: { FormTitle: 1, SubmitButton: 1, Success: 1 }, ForgotPassword: { BackToLogin: 1, FormInfo: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, Login: { FacebookButton: 1, ForgotPassword: 1, FormTitle: 1, GoogleButton: 1, OR: 1, RememberMe: 1, SignInButton: 1, SignUpButton: 1 }, ResetPassword: { BackToLogin: 1, EmailSubject: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, SignUp: { AcceptTerms: 1, ActivateEmailSubject: 1, ActivationCompleteMessage: 1, BackToLogin: 1, ConfirmEmail: 1, ConfirmPassword: 1, DisplayName: 1, Email: 1, FormInfo: 1, FormTitle: 1, Password: 1, SubmitButton: 1, Success: 1 } } }, Site: { AccessDenied: { ClickToChangeUser: 1, ClickToLogin: 1, LackPermissions: 1, NotLoggedIn: 1, PageTitle: 1 }, BasicProgressDialog: { CancelTitle: 1, PleaseWait: 1 }, BulkServiceAction: { AllHadErrorsFormat: 1, AllSuccessFormat: 1, ConfirmationFormat: 1, ErrorCount: 1, NothingToProcess: 1, SomeHadErrorsFormat: 1, SuccessCount: 1 }, Dashboard: { ContentDescription: 1 }, Layout: { FooterCopyright: 1, FooterInfo: 1, FooterRights: 1, GeneralSettings: 1, Language: 1, Theme: 1, ThemeBlack: 1, ThemeBlackLight: 1, ThemeBlue: 1, ThemeBlueLight: 1, ThemeGreen: 1, ThemeGreenLight: 1, ThemePurple: 1, ThemePurpleLight: 1, ThemeRed: 1, ThemeRedLight: 1, ThemeYellow: 1, ThemeYellowLight: 1 }, RolePermissionDialog: { DialogTitle: 1, EditButton: 1, SaveSuccess: 1 }, UserDialog: { EditPermissionsButton: 1, EditRolesButton: 1 }, UserPermissionDialog: { DialogTitle: 1, Grant: 1, Permission: 1, Revoke: 1, SaveSuccess: 1 }, UserRoleDialog: { DialogTitle: 1, SaveSuccess: 1 }, ValidationError: { Title: 1 } }, Validation: { AuthenticationError: 1, CantFindUserWithEmail: 1, CurrentPasswordMismatch: 1, DeleteForeignKeyError: 1, EmailConfirm: 1, EmailInUse: 1, InvalidActivateToken: 1, InvalidResetToken: 1, MinRequiredPasswordLength: 1, NorthwindPhone: 1, NorthwindPhoneMultiple: 1, SavePrimaryKeyError: 1 } });
    })(Texts = Payer.Texts || (Payer.Texts = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = /** @class */ (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = Payer.Administration || (Payer.Administration = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = /** @class */ (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return ["LanguageName" /* LanguageName */];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = Payer.Administration || (Payer.Administration = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Administration;
    (function (Administration) {
        var RoleDialog = /** @class */ (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = Payer.Administration || (Payer.Administration = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Administration;
    (function (Administration) {
        var RoleGrid = /** @class */ (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return ["RoleName" /* RoleName */];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = Payer.Administration || (Payer.Administration = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = /** @class */ (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return ({ PermissionKey: x }); });
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.value.map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = Payer.Administration || (Payer.Administration = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = /** @class */ (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return Promise.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = Payer.Administration || (Payer.Administration = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Administration;
    (function (Administration) {
        var UserDialog = /** @class */ (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'fa-users text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = Payer.Administration || (Payer.Administration = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Administration;
    (function (Administration) {
        var UserGrid = /** @class */ (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return ["Username" /* Username */];
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = Payer.Administration || (Payer.Administration = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = Payer.Authorization || (Payer.Authorization = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = /** @class */ (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this._rolePermissions = {};
                _this._implicitPermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.roleOrImplicit = function (key) {
                if (this._rolePermissions[key])
                    return true;
                for (var _i = 0, _a = Object.keys(this._rolePermissions); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var d = this._implicitPermissions[k];
                    if (d && d[key])
                        return true;
                }
                for (var _b = 0, _c = Object.keys(this._implicitPermissions); _b < _c.length; _b++) {
                    var i = _c[_b];
                    var item = this.view.getItemById(i);
                    if (item && item.GrantRevoke == true) {
                        var d = this._implicitPermissions[i];
                        if (d && d[key])
                            return true;
                    }
                }
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.roleOrImplicit(x.Key)); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            Object.defineProperty(PermissionCheckEditor.prototype, "value", {
                get: function () {
                    var result = [];
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                            result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                        }
                    }
                    return result;
                },
                set: function (value) {
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.GrantRevoke = null;
                    }
                    if (value != null) {
                        for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                            var row = value_1[_b];
                            var r = this.view.getItemById(row.PermissionKey);
                            if (r) {
                                r.GrantRevoke = Q.coalesce(row.Granted, true);
                            }
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "rolePermissions", {
                get: function () {
                    return Object.keys(this._rolePermissions);
                },
                set: function (value) {
                    this._rolePermissions = {};
                    if (value) {
                        for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                            var k = value_2[_i];
                            this._rolePermissions[k] = true;
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "implicitPermissions", {
                set: function (value) {
                    this._implicitPermissions = {};
                    if (value) {
                        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                            var k = _a[_i];
                            this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                            var l = value[k];
                            if (l) {
                                for (var _b = 0, l_1 = l; _b < l_1.length; _b++) {
                                    var s = l_1[_b];
                                    this._implicitPermissions[k][s] = true;
                                }
                            }
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = Payer.Administration || (Payer.Administration = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = /** @class */ (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities;
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.rolePermissions = response.Entities;
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.value,
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = Payer.Administration || (Payer.Administration = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = /** @class */ (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = Payer.Administration || (Payer.Administration = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = /** @class */ (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = Payer.Administration || (Payer.Administration = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = Payer.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = Payer.LanguageList || (Payer.LanguageList = {}));
})(Payer || (Payer = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var Payer;
(function (Payer) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('Payer');
        Serenity.EntityDialog.defaultLanguageList = Payer.LanguageList.getValue;
        if ($.fn['colorbox']) {
            $.fn['colorbox'].settings.maxWidth = "95%";
            $.fn['colorbox'].settings.maxHeight = "95%";
        }
        window.onerror = Q.ErrorHandling.runtimeErrorHandler;
    })(ScriptInitialization = Payer.ScriptInitialization || (Payer.ScriptInitialization = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var BasicProgressDialog = /** @class */ (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = _super.call(this) || this;
            _this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
            return _this;
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: true,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    Payer.BasicProgressDialog = BasicProgressDialog;
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
                var klass = 'edit string';
                var item = ctx.item;
                var pending = this.pendingChanges[item.ProductID];
                var column = ctx.column;
                if (pending && pending[column.field] !== undefined) {
                    klass += ' dirty';
                }
                var value = this.getEffectiveValue(item, column.field);
                return "<input type='text' class='" + klass +
                    "' data-field='" + column.field +
                    "' value='" + Q.attrEncode(value) +
                    "' maxlength='" + column.sourceItem.maxLength + "'/>";
            };
            /**
             * Sorry but you cannot use LookupEditor, e.g. Select2 here, only possible is a SELECT element
             */
            ProductGrid.prototype.selectFormatter = function (ctx, idField, lookup) {
                var klass = 'edit';
                var item = ctx.item;
                var pending = this.pendingChanges[item.ProductID];
                var column = ctx.column;
                if (pending && pending[idField] !== undefined) {
                    klass += ' dirty';
                }
                var value = this.getEffectiveValue(item, idField);
                var markup = "<select class='" + klass +
                    "' data-field='" + idField +
                    "' style='width: 100%; max-width: 100%'>";
                for (var _i = 0, _a = lookup.items; _i < _a.length; _i++) {
                    var c = _a[_i];
                    var id = c[lookup.idField];
                    markup += "<option value='" + Q.attrEncode(id) + "'";
                    if (id == value) {
                        markup += " selected";
                    }
                    markup += ">" + Q.htmlEncode(c[lookup.textField]) + "</option>";
                }
                return markup + "</select>";
            };
            ProductGrid.prototype.getEffectiveValue = function (item, field) {
                var pending = this.pendingChanges[item.ProductID];
                if (pending && pending[field] !== undefined) {
                    return pending[field];
                }
                return item[field];
            };
            ProductGrid.prototype.getColumns = function () {
                var _this = this;
                var columns = _super.prototype.getColumns.call(this);
                var num = function (ctx) { return _this.numericInputFormatter(ctx); };
                var str = function (ctx) { return _this.stringInputFormatter(ctx); };
                Q.first(columns, function (x) { return x.field === 'QuantityPerUnit'; }).format = str;
                var category = Q.first(columns, function (x) { return x.field === "CategoryName" /* CategoryName */; });
                category.referencedFields = ["CategoryID" /* CategoryID */];
                category.format = function (ctx) { return _this.selectFormatter(ctx, "CategoryID" /* CategoryID */, Northwind.CategoryRow.getLookup()); };
                var supplier = Q.first(columns, function (x) { return x.field === "SupplierCompanyName" /* SupplierCompanyName */; });
                supplier.referencedFields = ["SupplierID" /* SupplierID */];
                supplier.format = function (ctx) { return _this.selectFormatter(ctx, "SupplierID" /* SupplierID */, Northwind.SupplierRow.getLookup()); };
                Q.first(columns, function (x) { return x.field === "UnitPrice" /* UnitPrice */; }).format = num;
                Q.first(columns, function (x) { return x.field === "UnitsInStock" /* UnitsInStock */; }).format = num;
                Q.first(columns, function (x) { return x.field === "UnitsOnOrder" /* UnitsOnOrder */; }).format = num;
                Q.first(columns, function (x) { return x.field === "ReorderLevel" /* ReorderLevel */; }).format = num;
                return columns;
            };
            ProductGrid.prototype.inputsChange = function (e) {
                var cell = this.slickGrid.getCellFromEvent(e);
                var item = this.itemAt(cell.row);
                var input = $(e.target);
                var field = input.data('field');
                var text = Q.coalesce(Q.trimToNull(input.val()), '0');
                var pending = this.pendingChanges[item.ProductID];
                var effective = this.getEffectiveValue(item, field);
                var oldText;
                if (input.hasClass("numeric"))
                    oldText = Q.formatNumber(effective, '0.##');
                else
                    oldText = effective;
                var value;
                if (field === 'UnitPrice') {
                    value = Q.parseDecimal(text);
                    if (value == null || isNaN(value)) {
                        Q.notifyError(Q.text('Validation.Decimal'), '', null);
                        input.val(oldText);
                        input.focus();
                        return;
                    }
                }
                else if (input.hasClass("numeric")) {
                    var i = Q.parseInteger(text);
                    if (isNaN(i) || i > 32767 || i < 0) {
                        Q.notifyError(Q.text('Validation.Integer'), '', null);
                        input.val(oldText);
                        input.focus();
                        return;
                    }
                    value = i;
                }
                else
                    value = text;
                if (!pending) {
                    this.pendingChanges[item.ProductID] = pending = {};
                }
                pending[field] = value;
                item[field] = value;
                this.view.refresh();
                if (input.hasClass("numeric"))
                    value = Q.formatNumber(value, '0.##');
                input.val(value).addClass('dirty');
                this.setSaveButtonState();
            };
            ProductGrid.prototype.setSaveButtonState = function () {
                this.toolbar.findButton('apply-changes-button').toggleClass('disabled', Object.keys(this.pendingChanges).length === 0);
            };
            ProductGrid.prototype.saveClick = function () {
                if (Object.keys(this.pendingChanges).length === 0) {
                    return;
                }
                // this calls save service for all modified rows, one by one
                // you could write a batch update service
                var keys = Object.keys(this.pendingChanges);
                var current = -1;
                var self = this;
                (function saveNext() {
                    if (++current >= keys.length) {
                        self.refresh();
                        return;
                    }
                    var key = keys[current];
                    var entity = Q.deepClone(self.pendingChanges[key]);
                    entity.ProductID = key;
                    Q.serviceRequest('Northwind/Product/Update', {
                        EntityId: key,
                        Entity: entity
                    }, function (response) {
                        delete self.pendingChanges[key];
                        saveNext();
                    });
                })();
            };
            ProductGrid.prototype.getQuickFilters = function () {
                var flt = _super.prototype.getQuickFilters.call(this);
                var q = Q.parseQueryString();
                if (q["cat"]) {
                    var category = Q.tryFirst(flt, function (x) { return x.field == "CategoryID"; });
                    category.init = function (e) {
                        e.element.getWidget(Serenity.LookupEditor).value = q["cat"];
                    };
                }
                return flt;
            };
            ProductGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], ProductGrid);
            return ProductGrid;
        }(Serenity.EntityGrid));
        Northwind.ProductGrid = ProductGrid;
    })(Northwind = Payer.Northwind || (Payer.Northwind = {}));
})(Payer || (Payer = {}));
/// <reference path="../../../Northwind/Product/ProductGrid.ts" />
var Payer;
(function (Payer) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of ProductGrid to override dialog type to CloneableEntityDialog
         */
        var CloneableEntityGrid = /** @class */ (function (_super) {
            __extends(CloneableEntityGrid, _super);
            function CloneableEntityGrid(container) {
                return _super.call(this, container) || this;
            }
            CloneableEntityGrid.prototype.getDialogType = function () { return BasicSamples.CloneableEntityDialog; };
            CloneableEntityGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CloneableEntityGrid);
            return CloneableEntityGrid;
        }(Payer.Northwind.ProductGrid));
        BasicSamples.CloneableEntityGrid = CloneableEntityGrid;
    })(BasicSamples = Payer.BasicSamples || (Payer.BasicSamples = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Northwind;
    (function (Northwind) {
        var OrderGrid = /** @class */ (function (_super) {
            __extends(OrderGrid, _super);
            function OrderGrid(container) {
                return _super.call(this, container) || this;
            }
            OrderGrid.prototype.getColumnsKey = function () { return "Northwind.Order"; };
            OrderGrid.prototype.getDialogType = function () { return Northwind.OrderDialog; };
            OrderGrid.prototype.getIdProperty = function () { return Northwind.OrderRow.idProperty; };
            OrderGrid.prototype.getLocalTextPrefix = function () { return Northwind.OrderRow.localTextPrefix; };
            OrderGrid.prototype.getService = function () { return Northwind.OrderService.baseUrl; };
            OrderGrid.prototype.getQuickFilters = function () {
                var _this = this;
                var filters = _super.prototype.getQuickFilters.call(this);
                filters.push({
                    type: Serenity.LookupEditor,
                    options: {
                        lookupKey: Northwind.ProductRow.lookupKey
                    },
                    field: 'ProductID',
                    title: 'Contains Product in Details',
                    handler: function (w) {
                        _this.view.params.ProductID = Q.toId(w.value);
                    },
                    cssClass: 'hidden-xs'
                });
                return filters;
            };
            OrderGrid.prototype.createQuickFilters = function () {
                _super.prototype.createQuickFilters.call(this);
                this.shippingStateFilter = this.findQuickFilter(Serenity.EnumEditor, "ShippingState" /* ShippingState */);
            };
            OrderGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(Payer.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: Northwind.OrderService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(Payer.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            OrderGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(1, 0, {
                    field: 'Print Invoice',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action print-invoice" title="invoice">' +
                        '<i class="fa fa-file-pdf-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                return columns;
            };
            OrderGrid.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('print-invoice')) {
                        Payer.Common.ReportHelper.execute({
                            reportKey: 'Northwind.OrderDetail',
                            params: {
                                OrderID: item.OrderID
                            }
                        });
                    }
                }
            };
            OrderGrid.prototype.set_shippingState = function (value) {
                this.shippingStateFilter.value = value == null ? '' : value.toString();
            };
            OrderGrid.prototype.addButtonClick = function () {
                var eq = this.view.params.EqualityFilter;
                this.editItem({
                    CustomerID: eq ? eq.CustomerID : null
                });
            };
            OrderGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], OrderGrid);
            return OrderGrid;
        }(Serenity.EntityGrid));
        Northwind.OrderGrid = OrderGrid;
    })(Northwind = Payer.Northwind || (Payer.Northwind = {}));
})(Payer || (Payer = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var Payer;
(function (Payer) {
    var BasicSamples;
    (function (BasicSamples) {
        var DefaultValuesInNewGrid = /** @class */ (function (_super) {
            __extends(DefaultValuesInNewGrid, _super);
            function DefaultValuesInNewGrid(container) {
                return _super.call(this, container) || this;
            }
            /**
             * This method is called when New Item button is clicked.
             * By default, it calls EditItem with an empty entity.
             * This is a good place to fill in default values for New Item button.
             */
            DefaultValuesInNewGrid.prototype.addButtonClick = function () {
                this.editItem({
                    CustomerID: 'ANTON',
                    RequiredDate: Q.formatDate(new Date(), 'yyyy-MM-dd'),
                    EmployeeID: Payer.Northwind.EmployeeRow.getLookup().items
                        .filter(function (x) { return x.FullName === 'Robert King'; })[0].EmployeeID,
                    ShipVia: Payer.Northwind.ShipperRow.getLookup().items
                        .filter(function (x) { return x.CompanyName === 'Speedy Express'; })[0].ShipperID
                });
            };
            DefaultValuesInNewGrid.prototype.getButtons = function () {
                var _this = this;
                // preserving default New Item button
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push({
                    title: 'Add Order from the Queen',
                    cssClass: 'add-button',
                    onClick: function () {
                        // using EditItem method as a shortcut to create a new Order dialog,
                        // bind to its events, load our order row, and open dialog
                        _this.editItem({
                            CustomerID: 'QUEEN',
                            EmployeeID: Payer.Northwind.EmployeeRow.getLookup().items
                                .filter(function (x) { return x.FullName === 'Nancy Davolio'; })[0].EmployeeID,
                            ShipVia: Payer.Northwind.ShipperRow.getLookup().items
                                .filter(function (x) { return x.CompanyName === 'United Package'; })[0].ShipperID
                        });
                    }
                });
                buttons.push({
                    title: 'Add Order with 5 Chai by Laura', cssClass: 'add-note-button',
                    onClick: function () {
                        // we could use EditItem here too, but for demonstration
                        // purposes we are manually creating dialog this time
                        var dlg = new Payer.Northwind.OrderDialog();
                        // let grid watch for changes to manually created dialog, 
                        // so when a new item is saved, grid can refresh itself
                        _this.initDialog(dlg);
                        // get a reference to product Chai
                        var chai = Payer.Northwind.ProductRow.getLookup().items
                            .filter(function (x) { return x.ProductName === 'Chai'; })[0];
                        // LoadEntityAndOpenDialog, loads an OrderRow 
                        // to dialog and opens it
                        var lauraCallahanID = Payer.Northwind.EmployeeRow.getLookup().items
                            .filter(function (x) { return x.FullName === 'Laura Callahan'; })[0].EmployeeID;
                        dlg.loadEntityAndOpenDialog({
                            CustomerID: 'GOURL',
                            EmployeeID: lauraCallahanID,
                            DetailList: [{
                                    ProductID: chai.ProductID,
                                    ProductName: chai.ProductName,
                                    UnitPrice: chai.UnitPrice,
                                    Quantity: 5,
                                    LineTotal: chai.UnitPrice * 5
                                }]
                        });
                    }
                });
                return buttons;
            };
            DefaultValuesInNewGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DefaultValuesInNewGrid);
            return DefaultValuesInNewGrid;
        }(Payer.Northwind.OrderGrid));
        BasicSamples.DefaultValuesInNewGrid = DefaultValuesInNewGrid;
    })(BasicSamples = Payer.BasicSamples || (Payer.BasicSamples = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var BasicSamples;
    (function (BasicSamples) {
        var DialogBoxes;
        (function (DialogBoxes) {
            function initializePage() {
                confirmDialogButtons();
                confirmWithCustomTitle();
                information();
                warning();
                alert();
                alertWithHtmlContent();
            }
            DialogBoxes.initializePage = initializePage;
            function confirmDialogButtons() {
                // here we demonstrate how you can detect which button user has clicked
                // second parameter is Yes handler and it is called only when user clicks Yes.
                // third parameter has some additional options, that you should only use when needed
                $('#ConfirmDialogButtons').click(function () {
                    Q.confirm("Click one of buttons, or close dialog with [x] on top right, i'll tell you what you did!", function () {
                        Q.notifySuccess("You clicked YES. Great!");
                    }, {
                        onNo: function () {
                            Q.notifyInfo("You clicked NO. Why?");
                        },
                        onCancel: function () {
                            Q.notifyError("You clicked X. Operation is cancelled. Will try again?");
                        }
                    });
                });
            }
            function confirmWithCustomTitle() {
                $('#ConfirmWithCustomTitle').click(function () {
                    Q.confirm("This confirmation has a custom title", function () {
                        Q.notifySuccess("Allright!");
                    }, {
                        title: 'Some Custom Confirmation Title'
                    });
                });
            }
            function information() {
                $('#Information').click(function () {
                    Q.information("What a nice day", function () {
                        Q.notifySuccess("No problem!");
                    });
                });
            }
            function warning() {
                $('#Warning').click(function () {
                    Q.warning("Hey, be careful!");
                });
            }
            function alert() {
                $('#Alert').click(function () {
                    Q.alert("Houston, we got a problem!");
                });
            }
            function alertWithHtmlContent() {
                $('#AlertWithHtmlContent').click(function () {
                    Q.alert("<h4>Here is some HTML content!</h4>" +
                        "<ul><li>Item 1</li><li>Item 2</li >" +
                        "<li>Visit <a href='http://serenity.is/' target='_blank' style='color: #ddf'>http://serenity.is/</a>!</li></ul>", {
                        htmlEncode: false
                    });
                });
            }
        })(DialogBoxes = BasicSamples.DialogBoxes || (BasicSamples.DialogBoxes = {}));
    })(BasicSamples = Payer.BasicSamples || (Payer.BasicSamples = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Northwind;
    (function (Northwind) {
        var OrderDialog = /** @class */ (function (_super) {
            __extends(OrderDialog, _super);
            function OrderDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Northwind.OrderForm(_this.idPrefix);
                return _this;
            }
            OrderDialog.prototype.getFormKey = function () { return Northwind.OrderForm.formKey; };
            OrderDialog.prototype.getIdProperty = function () { return Northwind.OrderRow.idProperty; };
            OrderDialog.prototype.getLocalTextPrefix = function () { return Northwind.OrderRow.localTextPrefix; };
            OrderDialog.prototype.getNameProperty = function () { return Northwind.OrderRow.nameProperty; };
            OrderDialog.prototype.getService = function () { return Northwind.OrderService.baseUrl; };
            OrderDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push(Payer.Common.ReportHelper.createToolButton({
                    title: 'Invoice',
                    cssClass: 'export-pdf-button',
                    reportKey: 'Northwind.OrderDetail',
                    getParams: function () { return ({
                        OrderID: _this.get_entityId()
                    }); }
                }));
                return buttons;
            };
            OrderDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('export-pdf-button').toggle(this.isEditMode());
            };
            OrderDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], OrderDialog);
            return OrderDialog;
        }(Serenity.EntityDialog));
        Northwind.OrderDialog = OrderDialog;
    })(Northwind = Payer.Northwind || (Payer.Northwind = {}));
})(Payer || (Payer = {}));
/// <reference path="../../../Northwind/Order/OrderDialog.ts" />
var Payer;
(function (Payer) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * A version of order dialog converted to a panel by adding Serenity.Decorators.panel decorator.
         */
        var EntityDialogAsPanel = /** @class */ (function (_super) {
            __extends(EntityDialogAsPanel, _super);
            function EntityDialogAsPanel() {
                return _super.call(this) || this;
            }
            EntityDialogAsPanel.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.deleteButton.hide();
                this.applyChangesButton.hide();
            };
            EntityDialogAsPanel.prototype.onSaveSuccess = function (response) {
                this.showSaveSuccessMessage(response);
            };
            EntityDialogAsPanel = __decorate([
                Serenity.Decorators.panel()
            ], EntityDialogAsPanel);
            return EntityDialogAsPanel;
        }(Payer.Northwind.OrderDialog));
        BasicSamples.EntityDialogAsPanel = EntityDialogAsPanel;
    })(BasicSamples = Payer.BasicSamples || (Payer.BasicSamples = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Northwind;
    (function (Northwind) {
        var CategoryDialog = /** @class */ (function (_super) {
            __extends(CategoryDialog, _super);
            function CategoryDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.CategoryForm(_this.idPrefix);
                return _this;
            }
            CategoryDialog.prototype.getFormKey = function () { return Northwind.CategoryForm.formKey; };
            CategoryDialog.prototype.getIdProperty = function () { return Northwind.CategoryRow.idProperty; };
            CategoryDialog.prototype.getLocalTextPrefix = function () { return Northwind.CategoryRow.localTextPrefix; };
            CategoryDialog.prototype.getNameProperty = function () { return Northwind.CategoryRow.nameProperty; };
            CategoryDialog.prototype.getService = function () { return Northwind.CategoryService.baseUrl; };
            CategoryDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoryDialog);
            return CategoryDialog;
        }(Serenity.EntityDialog));
        Northwind.CategoryDialog = CategoryDialog;
    })(Northwind = Payer.Northwind || (Payer.Northwind = {}));
})(Payer || (Payer = {}));
/// <reference path="../../../Northwind/Category/CategoryDialog.ts" />
var Payer;
(function (Payer) {
    var BasicSamples;
    (function (BasicSamples) {
        var GetInsertedRecordIdDialog = /** @class */ (function (_super) {
            __extends(GetInsertedRecordIdDialog, _super);
            function GetInsertedRecordIdDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /**
             * This method is called after the save request to service
             * is completed succesfully. This can be an insert or update.
             *
             * @param response Response that is returned from server
             */
            GetInsertedRecordIdDialog.prototype.onSaveSuccess = function (response) {
                // check that this is an insert
                if (this.isNew()) {
                    Q.notifySuccess("Just inserted a category with ID: " + response.EntityId);
                    // you could also open a new dialog
                    // new Northwind.CategoryDialog().loadByIdAndOpenDialog(response.EntityId);
                    // but let's better load inserted record using Retrieve service
                    Payer.Northwind.CategoryService.Retrieve({
                        EntityId: response.EntityId
                    }, function (resp) {
                        Q.notifyInfo("Looks like the category you added has name: " + resp.Entity.CategoryName);
                    });
                }
            };
            GetInsertedRecordIdDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GetInsertedRecordIdDialog);
            return GetInsertedRecordIdDialog;
        }(Payer.Northwind.CategoryDialog));
        BasicSamples.GetInsertedRecordIdDialog = GetInsertedRecordIdDialog;
    })(BasicSamples = Payer.BasicSamples || (Payer.BasicSamples = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Northwind;
    (function (Northwind) {
        var CategoryGrid = /** @class */ (function (_super) {
            __extends(CategoryGrid, _super);
            function CategoryGrid(container) {
                return _super.call(this, container) || this;
            }
            CategoryGrid.prototype.getColumnsKey = function () { return "Northwind.Category"; };
            CategoryGrid.prototype.getDialogType = function () { return Northwind.CategoryDialog; };
            CategoryGrid.prototype.getIdProperty = function () { return Northwind.CategoryRow.idProperty; };
            CategoryGrid.prototype.getLocalTextPrefix = function () { return Northwind.CategoryRow.localTextPrefix; };
            CategoryGrid.prototype.getService = function () { return Northwind.CategoryService.baseUrl; };
            CategoryGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoryGrid);
            return CategoryGrid;
        }(Serenity.EntityGrid));
        Northwind.CategoryGrid = CategoryGrid;
    })(Northwind = Payer.Northwind || (Payer.Northwind = {}));
})(Payer || (Payer = {}));
/// <reference path="../../../Northwind/Category/CategoryGrid.ts" />
var Payer;
(function (Payer) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of CategoryGrid to override dialog type to GetInsertedRecordIdDialog
         */
        var GetInsertedRecordIdGrid = /** @class */ (function (_super) {
            __extends(GetInsertedRecordIdGrid, _super);
            function GetInsertedRecordIdGrid(container) {
                return _super.call(this, container) || this;
            }
            GetInsertedRecordIdGrid.prototype.getDialogType = function () { return BasicSamples.GetInsertedRecordIdDialog; };
            GetInsertedRecordIdGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], GetInsertedRecordIdGrid);
            return GetInsertedRecordIdGrid;
        }(Payer.Northwind.CategoryGrid));
        BasicSamples.GetInsertedRecordIdGrid = GetInsertedRecordIdGrid;
    })(BasicSamples = Payer.BasicSamples || (Payer.BasicSamples = {}));
})(Payer || (Payer = {}));
/// <reference path="../../../Northwind/Order/OrderDialog.ts" />
var Payer;
(function (Payer) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Our custom order dialog subclass that will have a tab to display and edit selected customer details.
         */
        var OtherFormInTabDialog = /** @class */ (function (_super) {
            __extends(OtherFormInTabDialog, _super);
            function OtherFormInTabDialog() {
                var _this = _super.call(this) || this;
                // entity dialogs by default creates a property grid on element with ID "PropertyGrid".
                // here we explicitly create another, the customer property grid (vertical form) on element with ID "CustomerPropertyGrid".
                _this.customerPropertyGrid = new Serenity.PropertyGrid(_this.byId("CustomerPropertyGrid"), {
                    idPrefix: _this.idPrefix + "_Customer_",
                    items: Q.getForm(Payer.Northwind.CustomerForm.formKey).filter(function (x) { return x.name != 'CustomerID'; }),
                    useCategories: true
                });
                // this is just a helper to access editors if needed
                _this.customerForm = new Payer.Northwind.CustomerForm(_this.customerPropertyGrid.idPrefix);
                // initialize validator for customer form
                _this.customerValidator = _this.byId("CustomerForm").validate(Q.validateOptions({}));
                var selfChange = 0;
                // creating another toolbar for customer tab that will only save Customer
                new Serenity.Toolbar(_this.byId("CustomerToolbar"), {
                    buttons: [{
                            cssClass: "apply-changes-button",
                            title: Q.text("Controls.EntityDialog.SaveButton"),
                            onClick: function () {
                                var id = _this.getCustomerID();
                                if (!id)
                                    return;
                                if (!_this.customerValidator.form())
                                    return;
                                // prepare an empty entity to serialize customer details into
                                var c = {};
                                _this.customerPropertyGrid.save(c);
                                Payer.Northwind.CustomerService.Update({
                                    EntityId: id,
                                    Entity: c
                                }, function (response) {
                                    // reload customer list just in case
                                    Q.reloadLookup(Payer.Northwind.CustomerRow.lookupKey);
                                    // set flag that we are triggering customer select change event
                                    // otherwise active tab will change to first one
                                    selfChange++;
                                    try {
                                        // trigger change so that customer select updates its text
                                        // in case if Company Name is changed
                                        _this.form.CustomerID.element.change();
                                    }
                                    finally {
                                        selfChange--;
                                    }
                                    Q.notifySuccess("Saved customer details");
                                });
                            }
                        }]
                });
                _this.form.CustomerID.change(function (e) {
                    if (selfChange)
                        return;
                    var customerID = _this.getCustomerID();
                    Serenity.TabsExtensions.setDisabled(_this.tabs, 'Customer', !customerID);
                    if (!customerID) {
                        // no customer is selected, just load an empty entity
                        _this.customerPropertyGrid.load({});
                        return;
                    }
                    // load selected customer into customer form by calling CustomerService
                    Payer.Northwind.CustomerService.Retrieve({
                        EntityId: customerID
                    }, function (response) {
                        _this.customerPropertyGrid.load(response.Entity);
                    });
                });
                return _this;
            }
            OtherFormInTabDialog.prototype.getCustomerID = function () {
                var customerID = this.form.CustomerID.value;
                if (Q.isEmptyOrNull(customerID))
                    return null;
                // unfortunately, CustomerID (a string) used in this form and 
                // the ID (auto increment ID) are different, so we need to 
                // find numeric ID from customer lookups. 
                // you'll probably won't need this step.
                return Q.first(Payer.Northwind.CustomerRow.getLookup().items, function (x) { return x.CustomerID == customerID; }).ID;
            };
            OtherFormInTabDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Customer', !this.getCustomerID());
            };
            OtherFormInTabDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OtherFormInTabDialog);
            return OtherFormInTabDialog;
        }(Payer.Northwind.OrderDialog));
        BasicSamples.OtherFormInTabDialog = OtherFormInTabDialog;
    })(BasicSamples = Payer.BasicSamples || (Payer.BasicSamples = {}));
})(Payer || (Payer = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var Payer;
(function (Payer) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of OrderGrid to override dialog type to OtherFormInTabDialog
         */
        var OtherFormInTabGrid = /** @class */ (function (_super) {
            __extends(OtherFormInTabGrid, _super);
            function OtherFormInTabGrid(container) {
                return _super.call(this, container) || this;
            }
            OtherFormInTabGrid.prototype.getDialogType = function () { return BasicSamples.OtherFormInTabDialog; };
            OtherFormInTabGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], OtherFormInTabGrid);
            return OtherFormInTabGrid;
        }(Payer.Northwind.OrderGrid));
        BasicSamples.OtherFormInTabGrid = OtherFormInTabGrid;
    })(BasicSamples = Payer.BasicSamples || (Payer.BasicSamples = {}));
})(Payer || (Payer = {}));
/// <reference path="../../../Northwind/Order/OrderDialog.ts" />
var Payer;
(function (Payer) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Our custom order dialog subclass that will have a tab to display and edit selected customer details.
         * With single toolbar for all forms
         */
        var OtherFormOneBarDialog = /** @class */ (function (_super) {
            __extends(OtherFormOneBarDialog, _super);
            function OtherFormOneBarDialog() {
                var _this = _super.call(this) || this;
                _this.selfChange = 0;
                // entity dialogs by default creates a property grid on element with ID "PropertyGrid".
                // here we explicitly create another, the customer property grid (vertical form) on element with ID "CustomerPropertyGrid".
                _this.customerPropertyGrid = new Serenity.PropertyGrid(_this.byId("CustomerPropertyGrid"), {
                    items: Q.getForm(Payer.Northwind.CustomerForm.formKey).filter(function (x) { return x.name != 'CustomerID'; }),
                    idPrefix: _this.idPrefix + "_Customer_",
                    useCategories: true
                });
                // this is just a helper to access editors if needed
                _this.customerForm = new Payer.Northwind.CustomerForm(_this.customerPropertyGrid.idPrefix);
                // initialize validator for customer form
                _this.customerValidator = _this.byId("CustomerForm").validate(Q.validateOptions({}));
                _this.form.CustomerID.change(function (e) {
                    if (_this.selfChange)
                        return;
                    var customerID = _this.getCustomerID();
                    Serenity.TabsExtensions.setDisabled(_this.tabs, 'Customer', !customerID);
                    if (!customerID) {
                        // no customer is selected, just load an empty entity
                        _this.customerPropertyGrid.load({});
                        return;
                    }
                    // load selected customer into customer form by calling CustomerService
                    Payer.Northwind.CustomerService.Retrieve({
                        EntityId: customerID
                    }, function (response) {
                        _this.customerPropertyGrid.load(response.Entity);
                    });
                });
                return _this;
            }
            OtherFormOneBarDialog.prototype.getCustomerID = function () {
                var customerID = this.form.CustomerID.value;
                if (Q.isEmptyOrNull(customerID))
                    return null;
                // unfortunately, CustomerID (a string) used in this form and 
                // the ID (auto increment ID) are different, so we need to 
                // find numeric ID from customer lookups. 
                // you'll probably won't need this step.
                return Q.first(Payer.Northwind.CustomerRow.getLookup().items, function (x) { return x.CustomerID == customerID; }).ID;
            };
            OtherFormOneBarDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Customer', !this.getCustomerID());
            };
            // Save the customer and the order 
            OtherFormOneBarDialog.prototype.saveCustomer = function (callback, onSuccess) {
                var _this = this;
                var id = this.getCustomerID();
                if (!id) {
                    // If id of Customer isn't present, we save only Order entity
                    onSuccess(null);
                }
                else {
                    // Get current tab
                    var currTab = Serenity.TabsExtensions.activeTabKey(this.tabs);
                    // Select the correct tab and validate to see the error message in tab
                    Serenity.TabsExtensions.selectTab(this.tabs, "Customer");
                    if (!this.customerValidator.form()) {
                        return false;
                    }
                    // Re-select initial tab
                    Serenity.TabsExtensions.selectTab(this.tabs, currTab);
                    // prepare an empty entity to serialize customer details into
                    var c = {};
                    this.customerPropertyGrid.save(c);
                    Payer.Northwind.CustomerService.Update({
                        EntityId: id,
                        Entity: c
                    }, function (response) {
                        // reload customer list just in case
                        Q.reloadLookup(Payer.Northwind.CustomerRow.lookupKey);
                        // set flag that we are triggering customer select change event
                        // otherwise active tab will change to first one
                        _this.selfChange++;
                        try {
                            // trigger change so that customer select updates its text
                            // in case if Company Name is changed
                            _this.form.CustomerID.element.change();
                        }
                        finally {
                            _this.selfChange--;
                        }
                        onSuccess(response);
                    });
                }
                return true;
            };
            // Call super.save to save Order entity
            OtherFormOneBarDialog.prototype.saveOrder = function (callback) {
                _super.prototype.save.call(this, callback);
            };
            OtherFormOneBarDialog.prototype.saveAll = function (callback) {
                var _this = this;
                this.saveCustomer(callback, 
                // If customer successa, save Order entity
                function (resp) { return _this.saveOrder(callback); });
            };
            // This is called when save/update button is pressed
            OtherFormOneBarDialog.prototype.save = function (callback) {
                this.saveAll(callback);
            };
            OtherFormOneBarDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OtherFormOneBarDialog);
            return OtherFormOneBarDialog;
        }(Payer.Northwind.OrderDialog));
        BasicSamples.OtherFormOneBarDialog = OtherFormOneBarDialog;
    })(BasicSamples = Payer.BasicSamples || (Payer.BasicSamples = {}));
})(Payer || (Payer = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var Payer;
(function (Payer) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of OrderGrid to override dialog type to OtherFormInTabOneBarDialog
         */
        var OtherFormInTabOneBarGrid = /** @class */ (function (_super) {
            __extends(OtherFormInTabOneBarGrid, _super);
            function OtherFormInTabOneBarGrid(container) {
                return _super.call(this, container) || this;
            }
            OtherFormInTabOneBarGrid.prototype.getDialogType = function () { return BasicSamples.OtherFormOneBarDialog; };
            OtherFormInTabOneBarGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], OtherFormInTabOneBarGrid);
            return OtherFormInTabOneBarGrid;
        }(Payer.Northwind.OrderGrid));
        BasicSamples.OtherFormInTabOneBarGrid = OtherFormInTabOneBarGrid;
    })(BasicSamples = Payer.BasicSamples || (Payer.BasicSamples = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var BasicSamples;
    (function (BasicSamples) {
        var PopulateLinkedDataDialog = /** @class */ (function (_super) {
            __extends(PopulateLinkedDataDialog, _super);
            function PopulateLinkedDataDialog() {
                var _this = _super.call(this) || this;
                _this.form = new BasicSamples.PopulateLinkedDataForm(_this.idPrefix);
                // "changeSelect2" is only fired when user changes the selection
                // but "change" is fired when dialog sets customer on load too
                // so we prefer "changeSelect2", as initial customer details 
                // will get populated by initial load, we don't want extra call
                _this.form.CustomerID.changeSelect2(function (e) {
                    var customerID = _this.form.CustomerID.value;
                    if (Q.isEmptyOrNull(customerID)) {
                        _this.setCustomerDetails({});
                        return;
                    }
                    // in northwind CustomerID is a string like "ALFKI", 
                    // while its actual integer ID value is 1.
                    // so we need to convert customer ID to ID.
                    // you won't have to do this conversion with your tables
                    var id = Q.first(Payer.Northwind.CustomerRow.getLookup().items, function (x) { return x.CustomerID == customerID; }).ID;
                    Payer.Northwind.CustomerService.Retrieve({
                        EntityId: id
                    }, function (response) {
                        _this.setCustomerDetails(response.Entity);
                    });
                });
                return _this;
            }
            PopulateLinkedDataDialog.prototype.getFormKey = function () { return BasicSamples.PopulateLinkedDataForm.formKey; };
            PopulateLinkedDataDialog.prototype.getIdProperty = function () { return Payer.Northwind.OrderRow.idProperty; };
            PopulateLinkedDataDialog.prototype.getLocalTextPrefix = function () { return Payer.Northwind.OrderRow.localTextPrefix; };
            PopulateLinkedDataDialog.prototype.getNameProperty = function () { return Payer.Northwind.OrderRow.nameProperty; };
            PopulateLinkedDataDialog.prototype.getService = function () { return Payer.Northwind.OrderService.baseUrl; };
            PopulateLinkedDataDialog.prototype.setCustomerDetails = function (details) {
                this.form.CustomerCity.value = details.City;
                this.form.CustomerContactName.value = details.ContactName;
                this.form.CustomerContactTitle.value = details.ContactTitle;
                this.form.CustomerCountry.value = details.Country;
                this.form.CustomerFax.value = details.Fax;
                this.form.CustomerPhone.value = details.Phone;
                this.form.CustomerRegion.value = details.Region;
            };
            /**
             * This dialog will have CSS class "s-PopulateLinkedDataDialog"
             * We are changing it here to "s-OrderDialog", to make it use default OrderDialog styles
             * This has no effect other than looks on populate linked data demonstration
             */
            PopulateLinkedDataDialog.prototype.getCssClass = function () {
                return _super.prototype.getCssClass.call(this) + " s-OrderDialog s-Northwind-OrderDialog";
            };
            PopulateLinkedDataDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PopulateLinkedDataDialog);
            return PopulateLinkedDataDialog;
        }(Serenity.EntityDialog));
        BasicSamples.PopulateLinkedDataDialog = PopulateLinkedDataDialog;
    })(BasicSamples = Payer.BasicSamples || (Payer.BasicSamples = {}));
})(Payer || (Payer = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var Payer;
(function (Payer) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * A subclass of OrderGrid that launches PopulateLinkedDataDialog
         */
        var PopulateLinkedDataGrid = /** @class */ (function (_super) {
            __extends(PopulateLinkedDataGrid, _super);
            function PopulateLinkedDataGrid(container) {
                return _super.call(this, container) || this;
            }
            PopulateLinkedDataGrid.prototype.getDialogType = function () { return BasicSamples.PopulateLinkedDataDialog; };
            PopulateLinkedDataGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PopulateLinkedDataGrid);
            return PopulateLinkedDataGrid;
        }(Payer.Northwind.OrderGrid));
        BasicSamples.PopulateLinkedDataGrid = PopulateLinkedDataGrid;
    })(BasicSamples = Payer.BasicSamples || (Payer.BasicSamples = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Northwind;
    (function (Northwind) {
        var SupplierDialog = /** @class */ (function (_super) {
            __extends(SupplierDialog, _super);
            function SupplierDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.SupplierForm(_this.idPrefix);
                return _this;
            }
            SupplierDialog.prototype.getFormKey = function () { return Northwind.SupplierForm.formKey; };
            SupplierDialog.prototype.getIdProperty = function () { return Northwind.SupplierRow.idProperty; };
            SupplierDialog.prototype.getLocalTextPrefix = function () { return Northwind.SupplierRow.localTextPrefix; };
            SupplierDialog.prototype.getNameProperty = function () { return Northwind.SupplierRow.nameProperty; };
            SupplierDialog.prototype.getService = function () { return Northwind.SupplierService.baseUrl; };
            SupplierDialog.prototype.getLanguages = function () {
                return Payer.LanguageList.getValue();
            };
            SupplierDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SupplierDialog);
            return SupplierDialog;
        }(Serenity.EntityDialog));
        Northwind.SupplierDialog = SupplierDialog;
    })(Northwind = Payer.Northwind || (Payer.Northwind = {}));
})(Payer || (Payer = {}));
/// <reference path="../../../Northwind/Supplier/SupplierDialog.ts" />
var Payer;
(function (Payer) {
    var BasicSamples;
    (function (BasicSamples) {
        var ReadOnlyDialog = /** @class */ (function (_super) {
            __extends(ReadOnlyDialog, _super);
            function ReadOnlyDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /**
             * This is the method that gets list of tool
             * buttons to be created in a dialog.
             *
             * Here we'll remove save and close button, and
             * apply changes buttons.
             */
            ReadOnlyDialog.prototype.getToolbarButtons = function () {
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "save-and-close-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "apply-changes-button"; }), 1);
                // We could also remove delete button here, but for demonstration 
                // purposes we'll hide it in another method (updateInterface)
                // buttons.splice(Q.indexOf(buttons, x => x.cssClass == "delete-button"), 1);
                return buttons;
            };
            /**
             * This method is a good place to update states of
             * interface elements. It is called after dialog
             * is initialized and an entity is loaded into dialog.
             * This is also called in new item mode.
             */
            ReadOnlyDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // finding all editor elements and setting their readonly attribute
                // note that this helper method only works with basic inputs, 
                // some editors require widget based set readonly overload (setReadOnly)
                Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);
                // remove required asterisk (*)
                this.element.find('sup').hide();
                // here is a way to locate a button by its css class
                // note that this method is not available in 
                // getToolbarButtons() because buttons are not 
                // created there yet!
                // 
                // this.toolbar.findButton('delete-button').hide();
                // entity dialog also has reference variables to
                // its default buttons, lets use them to hide delete button
                this.deleteButton.hide();
                // we could also hide save buttons just like delete button,
                // but they are null now as we removed them in getToolbarButtons()
                // if we didn't we could write like this:
                // 
                // this.applyChangesButton.hide();
                // this.saveAndCloseButton.hide();
                // instead of hiding, we could disable a button
                // 
                // this.deleteButton.toggleClass('disabled', true);
            };
            /**
             * This method is called when dialog title needs to be updated.
             * Base class returns something like 'Edit xyz' for edit mode,
             * and 'New xyz' for new record mode.
             *
             * But our dialog is readonly, so we should change it to 'View xyz'
             */
            ReadOnlyDialog.prototype.getEntityTitle = function () {
                if (!this.isEditMode()) {
                    // we shouldn't hit here, but anyway for demo...
                    return "How did you manage to open this dialog in new record mode?";
                }
                else {
                    // entitySingular is type of record this dialog edits. something like 'Supplier'.
                    // you could hardcode it, but this is for demonstration
                    var entityType = _super.prototype.getEntitySingular.call(this);
                    // get name field value of record this dialog edits
                    var name_1 = this.getEntityNameFieldValue() || "";
                    // you could use Q.format with a local text, but again demo...
                    return 'View ' + entityType + " (" + name_1 + ")";
                }
            };
            /**
             * This method is actually the one that calls getEntityTitle()
             * and updates the dialog title. We could do it here too...
             */
            ReadOnlyDialog.prototype.updateTitle = function () {
                _super.prototype.updateTitle.call(this);
                // remove super.updateTitle() call above and uncomment 
                // below line if you'd like to use this version
                // 
                // this.dialogTitle = 'View Supplier (' + this.getEntityNameFieldValue() + ')';
            };
            ReadOnlyDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ReadOnlyDialog);
            return ReadOnlyDialog;
        }(Payer.Northwind.SupplierDialog));
        BasicSamples.ReadOnlyDialog = ReadOnlyDialog;
    })(BasicSamples = Payer.BasicSamples || (Payer.BasicSamples = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Northwind;
    (function (Northwind) {
        var SupplierGrid = /** @class */ (function (_super) {
            __extends(SupplierGrid, _super);
            function SupplierGrid(container) {
                return _super.call(this, container) || this;
            }
            SupplierGrid.prototype.getColumnsKey = function () { return "Northwind.Supplier"; };
            SupplierGrid.prototype.getDialogType = function () { return Northwind.SupplierDialog; };
            SupplierGrid.prototype.getIdProperty = function () { return Northwind.SupplierRow.idProperty; };
            SupplierGrid.prototype.getLocalTextPrefix = function () { return Northwind.SupplierRow.localTextPrefix; };
            SupplierGrid.prototype.getService = function () { return Northwind.SupplierService.baseUrl; };
            SupplierGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SupplierGrid);
            return SupplierGrid;
        }(Serenity.EntityGrid));
        Northwind.SupplierGrid = SupplierGrid;
    })(Northwind = Payer.Northwind || (Payer.Northwind = {}));
})(Payer || (Payer = {}));
/// <reference path="../../../Northwind/Supplier/SupplierGrid.ts" />
var Payer;
(function (Payer) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * A readonly grid that launches ReadOnlyDialog
         */
        var ReadOnlyGrid = /** @class */ (function (_super) {
            __extends(ReadOnlyGrid, _super);
            function ReadOnlyGrid(container) {
                return _super.call(this, container) || this;
            }
            ReadOnlyGrid.prototype.getDialogType = function () { return BasicSamples.ReadOnlyDialog; };
            /**
             * Removing add button from grid using its css class
             */
            ReadOnlyGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            ReadOnlyGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ReadOnlyGrid);
            return ReadOnlyGrid;
        }(Payer.Northwind.SupplierGrid));
        BasicSamples.ReadOnlyGrid = ReadOnlyGrid;
    })(BasicSamples = Payer.BasicSamples || (Payer.BasicSamples = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Northwind;
    (function (Northwind) {
        var CustomerDialog = /** @class */ (function (_super) {
            __extends(CustomerDialog, _super);
            function CustomerDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Northwind.CustomerForm(_this.idPrefix);
                _this.ordersGrid = new Northwind.CustomerOrdersGrid(_this.byId('OrdersGrid'));
                // force order dialog to open in Dialog mode instead of Panel mode
                // which is set as default on OrderDialog with @panelAttribute
                _this.ordersGrid.openDialogsAsPanel = false;
                _this.byId('NoteList').closest('.field').hide().end().appendTo(_this.byId('TabNotes'));
                Payer.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
                return _this;
            }
            CustomerDialog.prototype.getFormKey = function () { return Northwind.CustomerForm.formKey; };
            CustomerDialog.prototype.getIdProperty = function () { return Northwind.CustomerRow.idProperty; };
            CustomerDialog.prototype.getLocalTextPrefix = function () { return Northwind.CustomerRow.localTextPrefix; };
            CustomerDialog.prototype.getNameProperty = function () { return Northwind.CustomerRow.nameProperty; };
            CustomerDialog.prototype.getService = function () { return Northwind.CustomerService.baseUrl; };
            CustomerDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            CustomerDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            CustomerDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Orders', this.isNewOrDeleted());
                this.ordersGrid.customerID = entity.CustomerID;
            };
            CustomerDialog.prototype.onSaveSuccess = function (response) {
                _super.prototype.onSaveSuccess.call(this, response);
                Q.reloadLookup('Northwind.Customer');
            };
            CustomerDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], CustomerDialog);
            return CustomerDialog;
        }(Serenity.EntityDialog));
        Northwind.CustomerDialog = CustomerDialog;
    })(Northwind = Payer.Northwind || (Payer.Northwind = {}));
})(Payer || (Payer = {}));
/// <reference path="../../../Northwind/Customer/CustomerDialog.ts" />
var Payer;
(function (Payer) {
    var BasicSamples;
    (function (BasicSamples) {
        var SerialAutoNumberDialog = /** @class */ (function (_super) {
            __extends(SerialAutoNumberDialog, _super);
            function SerialAutoNumberDialog() {
                var _this = _super.call(this) || this;
                _this.form.CustomerID.element.on('keyup', function (e) {
                    // only auto number when a key between 'A' and 'Z' is pressed
                    if (e.which >= 65 && e.which <= 90)
                        _this.getNextNumber();
                });
                return _this;
            }
            SerialAutoNumberDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // fill next number in new record mode
                if (this.isNew())
                    this.getNextNumber();
            };
            SerialAutoNumberDialog.prototype.getNextNumber = function () {
                var _this = this;
                var val = Q.trimToNull(this.form.CustomerID.value);
                // we will only get next number when customer ID is empty or 1 character in length
                if (!val || val.length <= 1) {
                    // if no customer ID yet (new record mode probably) use 'C' as a prefix
                    var prefix = (val || 'C').toUpperCase();
                    // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                    Payer.Northwind.CustomerService.GetNextNumber({
                        Prefix: prefix,
                        Length: 5 // we want service to search for and return serials of 5 in length
                    }, function (response) {
                        _this.form.CustomerID.value = response.Serial;
                        // this is to mark numerical part after prefix
                        _this.form.CustomerID.element[0].setSelectionRange(prefix.length, response.Serial.length);
                    });
                }
            };
            SerialAutoNumberDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SerialAutoNumberDialog);
            return SerialAutoNumberDialog;
        }(Payer.Northwind.CustomerDialog));
        BasicSamples.SerialAutoNumberDialog = SerialAutoNumberDialog;
    })(BasicSamples = Payer.BasicSamples || (Payer.BasicSamples = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Northwind;
    (function (Northwind) {
        var CustomerGrid = /** @class */ (function (_super) {
            __extends(CustomerGrid, _super);
            function CustomerGrid(container) {
                return _super.call(this, container) || this;
            }
            CustomerGrid.prototype.getColumnsKey = function () { return "Northwind.Customer"; };
            CustomerGrid.prototype.getDialogType = function () { return Northwind.CustomerDialog; };
            CustomerGrid.prototype.getIdProperty = function () { return Northwind.CustomerRow.idProperty; };
            CustomerGrid.prototype.getLocalTextPrefix = function () { return Northwind.CustomerRow.localTextPrefix; };
            CustomerGrid.prototype.getService = function () { return Northwind.CustomerService.baseUrl; };
            CustomerGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(Payer.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Northwind/Customer/ListExcel',
                    separator: true
                }));
                buttons.push(Payer.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            CustomerGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], CustomerGrid);
            return CustomerGrid;
        }(Serenity.EntityGrid));
        Northwind.CustomerGrid = CustomerGrid;
    })(Northwind = Payer.Northwind || (Payer.Northwind = {}));
})(Payer || (Payer = {}));
/// <reference path="../../../Northwind/Customer/CustomerGrid.ts" />
var Payer;
(function (Payer) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of CustomerGrid to override dialog type to SerialAutoNumberDialog
         */
        var SerialAutoNumberGrid = /** @class */ (function (_super) {
            __extends(SerialAutoNumberGrid, _super);
            function SerialAutoNumberGrid(container) {
                return _super.call(this, container) || this;
            }
            SerialAutoNumberGrid.prototype.getDialogType = function () { return BasicSamples.SerialAutoNumberDialog; };
            SerialAutoNumberGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SerialAutoNumberGrid);
            return SerialAutoNumberGrid;
        }(Payer.Northwind.CustomerGrid));
        BasicSamples.SerialAutoNumberGrid = SerialAutoNumberGrid;
    })(BasicSamples = Payer.BasicSamples || (Payer.BasicSamples = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Common;
    (function (Common) {
        var GridEditorDialog = /** @class */ (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            GridEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GridEditorDialog);
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = Payer.Common || (Payer.Common = {}));
})(Payer || (Payer = {}));
/// <reference path="../../../Common/Helpers/GridEditorDialog.ts" />
var Payer;
(function (Payer) {
    var BasicSamples;
    (function (BasicSamples) {
        var ChangingLookupTextDialog = /** @class */ (function (_super) {
            __extends(ChangingLookupTextDialog, _super);
            function ChangingLookupTextDialog() {
                var _this = _super.call(this) || this;
                _this.form = new BasicSamples.ChangingLookupTextForm(_this.idPrefix);
                _this.form.ProductID.changeSelect2(function (e) {
                    var productID = Q.toId(_this.form.ProductID.value);
                    if (productID != null) {
                        _this.form.UnitPrice.value = Payer.Northwind.ProductRow.getLookup().itemById[productID].UnitPrice;
                    }
                });
                _this.form.Discount.addValidationRule(_this.uniqueName, function (e) {
                    var price = _this.form.UnitPrice.value;
                    var quantity = _this.form.Quantity.value;
                    var discount = _this.form.Discount.value;
                    if (price != null && quantity != null && discount != null &&
                        discount > 0 && discount >= price * quantity) {
                        return "Discount can't be higher than total price!";
                    }
                });
                return _this;
            }
            ChangingLookupTextDialog.prototype.getFormKey = function () { return BasicSamples.ChangingLookupTextForm.formKey; };
            ChangingLookupTextDialog.prototype.getLocalTextPrefix = function () { return Payer.Northwind.OrderDetailRow.localTextPrefix; };
            ChangingLookupTextDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('apply-changes-button').hide();
                this.toolbar.findButton('save-and-close-button').hide();
            };
            ChangingLookupTextDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangingLookupTextDialog);
            return ChangingLookupTextDialog;
        }(Payer.Common.GridEditorDialog));
        BasicSamples.ChangingLookupTextDialog = ChangingLookupTextDialog;
    })(BasicSamples = Payer.BasicSamples || (Payer.BasicSamples = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Our custom product editor type
         */
        var ChangingLookupTextEditor = /** @class */ (function (_super) {
            __extends(ChangingLookupTextEditor, _super);
            function ChangingLookupTextEditor(container, options) {
                return _super.call(this, container, options) || this;
            }
            ChangingLookupTextEditor.prototype.getLookupKey = function () {
                return Payer.Northwind.ProductRow.lookupKey;
            };
            ChangingLookupTextEditor.prototype.getItemText = function (item, lookup) {
                return _super.prototype.getItemText.call(this, item, lookup) +
                    ' (' +
                    '$' + Q.formatNumber(item.UnitPrice, '#,##0.00') +
                    ', ' + (item.UnitsInStock > 0 ? (item.UnitsInStock + ' in stock') : 'out of stock') +
                    ', ' + (item.SupplierCompanyName || 'Unknown') +
                    ')';
            };
            ChangingLookupTextEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], ChangingLookupTextEditor);
            return ChangingLookupTextEditor;
        }(Serenity.LookupEditorBase));
        BasicSamples.ChangingLookupTextEditor = ChangingLookupTextEditor;
    })(BasicSamples = Payer.BasicSamples || (Payer.BasicSamples = {}));
})(Payer || (Payer = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Payer;
(function (Payer) {
    var Northwind;
    (function (Northwind) {
        var OrderDetailDialog = /** @class */ (function (_super) {
            __extends(OrderDetailDialog, _super);
            function OrderDetailDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Northwind.OrderDetailForm(_this.idPrefix);
                _this.form.ProductID.changeSelect2(function (e) {
                    var productID = Q.toId(_this.form.ProductID.value);
                    if (productID != null) {
                        _this.form.UnitPrice.value = Northwind.ProductRow.getLookup().itemById[productID].UnitPrice;
                    }
                });
                _this.form.Discount.addValidationRule(_this.uniqueName, function (e) {
                    var price = _this.form.UnitPrice.value;
                    var quantity = _this.form.Quantity.value;
                    var discount = _this.form.Discount.value;
                    if (price != null && quantity != null && discount != null &&
                        discount > 0 && discount >= price * quantity) {
                        return "Discount can't be higher than total price!";
                    }
                });
                return _this;
            }
            OrderDetailDialog.prototype.getFormKey = function () { return Northwind.OrderDetailForm.formKey; };
            OrderDetailDialog.prototype.getLocalTextPrefix = function () { return Northwind.OrderDetailRow.localTextPrefix; };
            OrderDetailDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OrderDetailDialog);
            return OrderDetailDialog;
        }(Payer.Common.GridEditorDialog));
        Northwind.OrderDetailDialog = OrderDetailDialog;
    })(Northwind = Payer.Northwind || (Payer.Northwind = {}));
})(Payer || (Payer = {}));
/// <reference path="../../../Northwind/OrderDetail/OrderDetailDialog.ts" />
var Payer;
(function (Payer) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Our subclass of order detail dialog with a CategoryID property
         * that will be used to set CascadeValue of product editor
         */
        var FilteredLookupOrderDetailDialog = /** @class */ (function (_super) {
            __extends(FilteredLookupOrderDetailDialog, _super);
            function FilteredLookupOrderDetailDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Payer.Northwind.OrderDetailForm(_this.idPrefix);
                // we can set cascade field in constructor
                // we could also use FilterField but in this case, when CategoryID is null
                // lookup editor would show all products in any category
                _this.form.ProductID.cascadeField = "CategoryID" /* CategoryID */;
                return _this;
                // but CategoryID value is not yet available here as detail editor will set it 
                // after calling constructor (creating a detail dialog) so we'll use BeforeLoadEntity
            }
            /**
             * This method is called just before an entity is loaded to dialog
             * This is also called for new record mode with an empty entity
             */
            FilteredLookupOrderDetailDialog.prototype.beforeLoadEntity = function (entity) {
                _super.prototype.beforeLoadEntity.call(this, entity);
                // setting cascade value here
                // make sure you have [LookupInclude] on CategoryID property of ProductRow
                // otherwise this field won't be available in lookup script (will always be null),
                // so can't be filtered and you'll end up with an empty product list.
                this.form.ProductID.cascadeValue = this.categoryID;
            };
            FilteredLookupOrderDetailDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], FilteredLookupOrderDetailDialog);
            return FilteredLookupOrderDetailDialog;
        }(Payer.Northwind.OrderDetailDialog));
        BasicSamples.FilteredLookupOrderDetailDialog = FilteredLookupOrderDetailDialog;
    })(BasicSamples = Payer.BasicSamples || (Payer.BasicSamples = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Common;
    (function (Common) {
        var GridEditorBase = /** @class */ (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: this.getAddButtonCaption(),
                        cssClass: 'add-button',
                        onClick: function () {
                            _this.createEntityDialog(_this.getItemType(), function (dlg) {
                                var dialog = dlg;
                                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                                dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                            });
                        }
                    }];
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: true,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            GridEditorBase.prototype.enableDeleteColumn = function () {
                return false;
            };
            GridEditorBase.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                if (this.enableDeleteColumn()) {
                    columns.unshift({
                        field: 'Delete Row',
                        name: '',
                        format: function (ctx) { return '<a class="inline-action delete-row" title="delete">' +
                            '<i class="fa fa-trash-o text-red"></i></a>'; },
                        width: 24,
                        minWidth: 24,
                        maxWidth: 24
                    });
                }
                return columns;
            };
            GridEditorBase.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (this.enableDeleteColumn()) {
                        if (target.hasClass('delete-row')) {
                            Q.confirm(Q.text('Controls.EntityDialog.DeleteConfirmation'), function () {
                                _this.deleteEntity(item[_this.getIdProperty()]);
                            });
                        }
                    }
                }
            };
            GridEditorBase = __decorate([
                Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.editor(),
                Serenity.Decorators.element("<div/>")
            ], GridEditorBase);
            return GridEditorBase;
        }(Serenity.EntityGrid));
        Common.GridEditorBase = GridEditorBase;
    })(Common = Payer.Common || (Payer.Common = {}));
})(Payer || (Payer = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Payer;
(function (Payer) {
    var Northwind;
    (function (Northwind) {
        var OrderDetailsEditor = /** @class */ (function (_super) {
            __extends(OrderDetailsEditor, _super);
            function OrderDetailsEditor(container) {
                return _super.call(this, container) || this;
            }
            OrderDetailsEditor.prototype.getColumnsKey = function () { return "Northwind.OrderDetail"; };
            OrderDetailsEditor.prototype.getDialogType = function () { return Northwind.OrderDetailDialog; };
            OrderDetailsEditor.prototype.getLocalTextPrefix = function () { return Northwind.OrderDetailRow.localTextPrefix; };
            OrderDetailsEditor.prototype.validateEntity = function (row, id) {
                row.ProductID = Q.toId(row.ProductID);
                var sameProduct = Q.tryFirst(this.view.getItems(), function (x) { return x.ProductID === row.ProductID; });
                if (sameProduct && this.id(sameProduct) !== id) {
                    Q.alert('This product is already in order details!');
                    return false;
                }
                row.ProductName = Northwind.ProductRow.getLookup().itemById[row.ProductID].ProductName;
                row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
                return true;
            };
            OrderDetailsEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], OrderDetailsEditor);
            return OrderDetailsEditor;
        }(Payer.Common.GridEditorBase));
        Northwind.OrderDetailsEditor = OrderDetailsEditor;
    })(Northwind = Payer.Northwind || (Payer.Northwind = {}));
})(Payer || (Payer = {}));
/// <reference path="../../../Northwind/OrderDetail/OrderDetailsEditor.ts" />
var Payer;
(function (Payer) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Our subclass of Order Details editor with a CategoryID property
         */
        var FilteredLookupDetailEditor = /** @class */ (function (_super) {
            __extends(FilteredLookupDetailEditor, _super);
            function FilteredLookupDetailEditor(container) {
                return _super.call(this, container) || this;
            }
            FilteredLookupDetailEditor.prototype.getDialogType = function () { return BasicSamples.FilteredLookupOrderDetailDialog; };
            /**
             * This method is called to initialize an edit dialog created by
             * grid editor when Add button or an edit link is clicked
             * We have an opportunity here to pass CategoryID to edit dialog
             */
            FilteredLookupDetailEditor.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                // passing category ID from grid editor to detail dialog
                dialog.categoryID = this.categoryID;
            };
            FilteredLookupDetailEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], FilteredLookupDetailEditor);
            return FilteredLookupDetailEditor;
        }(Payer.Northwind.OrderDetailsEditor));
        BasicSamples.FilteredLookupDetailEditor = FilteredLookupDetailEditor;
    })(BasicSamples = Payer.BasicSamples || (Payer.BasicSamples = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Basic order dialog with a category selection
         */
        var FilteredLookupInDetailDialog = /** @class */ (function (_super) {
            __extends(FilteredLookupInDetailDialog, _super);
            function FilteredLookupInDetailDialog() {
                var _this = _super.call(this) || this;
                _this.form = new BasicSamples.FilteredLookupInDetailForm(_this.idPrefix);
                _this.form.CategoryID.change(function (e) {
                    _this.form.DetailList.categoryID = Q.toId(_this.form.CategoryID.value);
                });
                return _this;
            }
            FilteredLookupInDetailDialog.prototype.getFormKey = function () { return BasicSamples.FilteredLookupInDetailForm.formKey; };
            FilteredLookupInDetailDialog.prototype.getIdProperty = function () { return Payer.Northwind.OrderRow.idProperty; };
            FilteredLookupInDetailDialog.prototype.getLocalTextPrefix = function () { return Payer.Northwind.OrderRow.localTextPrefix; };
            FilteredLookupInDetailDialog.prototype.getNameProperty = function () { return Payer.Northwind.OrderRow.nameProperty; };
            FilteredLookupInDetailDialog.prototype.getService = function () { return Payer.Northwind.OrderService.baseUrl; };
            FilteredLookupInDetailDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], FilteredLookupInDetailDialog);
            return FilteredLookupInDetailDialog;
        }(Serenity.EntityDialog));
        BasicSamples.FilteredLookupInDetailDialog = FilteredLookupInDetailDialog;
    })(BasicSamples = Payer.BasicSamples || (Payer.BasicSamples = {}));
})(Payer || (Payer = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var Payer;
(function (Payer) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of OrderGrid to override dialog type to FilteredLookupInDetailDialog
         */
        var FilteredLookupInDetailGrid = /** @class */ (function (_super) {
            __extends(FilteredLookupInDetailGrid, _super);
            function FilteredLookupInDetailGrid(container) {
                return _super.call(this, container) || this;
            }
            FilteredLookupInDetailGrid.prototype.getDialogType = function () { return BasicSamples.FilteredLookupInDetailDialog; };
            FilteredLookupInDetailGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], FilteredLookupInDetailGrid);
            return FilteredLookupInDetailGrid;
        }(Payer.Northwind.OrderGrid));
        BasicSamples.FilteredLookupInDetailGrid = FilteredLookupInDetailGrid;
    })(BasicSamples = Payer.BasicSamples || (Payer.BasicSamples = {}));
})(Payer || (Payer = {}));
/// <reference path="../../../Northwind/Product/ProductDialog.ts" />
var Payer;
(function (Payer) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * This is our custom product dialog that uses a different product form
         * (LookupFilterByMultipleForm) with our special category editor.
         */
        var LookupFilterByMultipleDialog = /** @class */ (function (_super) {
            __extends(LookupFilterByMultipleDialog, _super);
            function LookupFilterByMultipleDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            LookupFilterByMultipleDialog.prototype.getFormKey = function () { return BasicSamples.LookupFilterByMultipleForm.formKey; };
            LookupFilterByMultipleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LookupFilterByMultipleDialog);
            return LookupFilterByMultipleDialog;
        }(Payer.Northwind.ProductDialog));
        BasicSamples.LookupFilterByMultipleDialog = LookupFilterByMultipleDialog;
    })(BasicSamples = Payer.BasicSamples || (Payer.BasicSamples = {}));
})(Payer || (Payer = {}));
/// <reference path="../../../Northwind/Product/ProductGrid.ts" />
var Payer;
(function (Payer) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of ProductGrid to override dialog type to CloneableEntityDialog
         */
        var LookupFilterByMultipleGrid = /** @class */ (function (_super) {
            __extends(LookupFilterByMultipleGrid, _super);
            function LookupFilterByMultipleGrid(container) {
                return _super.call(this, container) || this;
            }
            LookupFilterByMultipleGrid.prototype.getDialogType = function () { return BasicSamples.LookupFilterByMultipleDialog; };
            /**
             * This method is called just before List request is sent to service.
             * You have an opportunity here to cancel request or modify it.
             * Here we'll add a custom criteria to list request.
             */
            LookupFilterByMultipleGrid.prototype.onViewSubmit = function () {
                if (!_super.prototype.onViewSubmit.call(this)) {
                    return false;
                }
                // this has no relation to our lookup editor but as we'll allow picking only 
                // categories of Produce and Seafood in product dialog, it's better to show
                // only products from these categories in grid too
                var request = this.view.params;
                request.Criteria = Serenity.Criteria.and(request.Criteria, [['CategoryName'], 'in', [['Produce', 'Seafood']]]);
                // brackets used are important above, NOT ['CategoryName', 'in', ['Produce', 'Seafood']]
                return true;
            };
            LookupFilterByMultipleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LookupFilterByMultipleGrid);
            return LookupFilterByMultipleGrid;
        }(Payer.Northwind.ProductGrid));
        BasicSamples.LookupFilterByMultipleGrid = LookupFilterByMultipleGrid;
    })(BasicSamples = Payer.BasicSamples || (Payer.BasicSamples = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * This is our category editor that will show only categories of Produce and
         * Seafood. We are subclassing LookupEditorBase which also LookupEditor
         * derives from.
         *
         * After compiling and transforming templates, this editor type will be
         * available in server side to use in our LookupFilterByMultipleForm,
         * which is a version of ProductForm that uses our custom editor.
         */
        var ProduceSeafoodCategoryEditor = /** @class */ (function (_super) {
            __extends(ProduceSeafoodCategoryEditor, _super);
            function ProduceSeafoodCategoryEditor(container, opt) {
                return _super.call(this, container, opt) || this;
            }
            /**
             * Normally LookupEditor requires a lookup key to determine which set of
             * lookup data to show in editor. As our editor will only show category
             * data, we lock it to category lookup key.
             */
            ProduceSeafoodCategoryEditor.prototype.getLookupKey = function () {
                return Payer.Northwind.CategoryRow.lookupKey;
            };
            /**
             * Here we are filtering by category name but you could filter by any field.
             * Just make sure the fields you filter on has [LookupInclude] attribute on them,
             * otherwise their value will be null in client side as they are not sent back
             * from server in lookup script.
             */
            ProduceSeafoodCategoryEditor.prototype.getItems = function (lookup) {
                return _super.prototype.getItems.call(this, lookup).filter(function (x) {
                    return x.CategoryName === 'Produce' || x.CategoryName === 'Seafood';
                });
            };
            ProduceSeafoodCategoryEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], ProduceSeafoodCategoryEditor);
            return ProduceSeafoodCategoryEditor;
        }(Serenity.LookupEditorBase));
        BasicSamples.ProduceSeafoodCategoryEditor = ProduceSeafoodCategoryEditor;
    })(BasicSamples = Payer.BasicSamples || (Payer.BasicSamples = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var BasicSamples;
    (function (BasicSamples) {
        var HardcodedValuesDialog = /** @class */ (function (_super) {
            __extends(HardcodedValuesDialog, _super);
            function HardcodedValuesDialog() {
                var _this = _super.call(this) || this;
                _this.form = new BasicSamples.HardcodedValuesForm(_this.idPrefix);
                _this.dialogTitle = "Please select some value";
                _this.form.SomeValue.changeSelect2(function (e) {
                    Q.notifySuccess("You selected item with key: " + _this.form.SomeValue.value);
                });
                return _this;
            }
            HardcodedValuesDialog.prototype.getFormKey = function () { return BasicSamples.HardcodedValuesForm.formKey; };
            HardcodedValuesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], HardcodedValuesDialog);
            return HardcodedValuesDialog;
        }(Serenity.PropertyDialog));
        BasicSamples.HardcodedValuesDialog = HardcodedValuesDialog;
    })(BasicSamples = Payer.BasicSamples || (Payer.BasicSamples = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Our select editor with hardcoded values.
         *
         * When you define a new editor type, make sure you build
         * and transform templates for it to be available
         * in server side forms, e.g. [HardCodedValuesEditor]
         */
        var HardcodedValuesEditor = /** @class */ (function (_super) {
            __extends(HardcodedValuesEditor, _super);
            function HardcodedValuesEditor(container) {
                var _this = _super.call(this, container, null) || this;
                // add option accepts a key (id) value and display text value
                _this.addOption("key1", "Text 1");
                _this.addOption("key2", "Text 2");
                // you may also use addItem which accepts a Select2Item parameter
                _this.addItem({
                    id: "key3",
                    text: "Text 3"
                });
                // don't let selecting this one (disabled)
                _this.addItem({
                    id: "key4",
                    text: "Text 4",
                    disabled: true
                });
                return _this;
            }
            HardcodedValuesEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], HardcodedValuesEditor);
            return HardcodedValuesEditor;
        }(Serenity.Select2Editor));
        BasicSamples.HardcodedValuesEditor = HardcodedValuesEditor;
    })(BasicSamples = Payer.BasicSamples || (Payer.BasicSamples = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var BasicSamples;
    (function (BasicSamples) {
        var StaticTextBlockDialog = /** @class */ (function (_super) {
            __extends(StaticTextBlockDialog, _super);
            function StaticTextBlockDialog() {
                var _this = _super.call(this) || this;
                _this.form = new BasicSamples.StaticTextBlockForm(_this.idPrefix);
                _this.dialogTitle = "A form with static text blocks";
                return _this;
            }
            StaticTextBlockDialog.prototype.getFormKey = function () { return BasicSamples.StaticTextBlockForm.formKey; };
            /**
             * Here we override loadInitialEntity method to set value for "DisplayFieldValue" field.
             * If this was an EntityDialog, your field value would be originating from server side entity.
             */
            StaticTextBlockDialog.prototype.loadInitialEntity = function () {
                this.propertyGrid.load({
                    DisplayFieldValue: 'This content comes from <b>the value</b> of <em>DisplayFieldValue</em> field.'
                });
            };
            StaticTextBlockDialog.prototype.getDialogOptions = function () {
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.width = 650;
                return opt;
            };
            StaticTextBlockDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], StaticTextBlockDialog);
            return StaticTextBlockDialog;
        }(Serenity.PropertyDialog));
        BasicSamples.StaticTextBlockDialog = StaticTextBlockDialog;
    })(BasicSamples = Payer.BasicSamples || (Payer.BasicSamples = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Common;
    (function (Common) {
        var BulkServiceAction = /** @class */ (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new Payer.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = Payer.Common || (Payer.Common = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.on('dialogbeforeclose panelbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        if (element.hasClass('ui-dialog-content'))
                            element.dialog('close');
                        else if (element.hasClass('s-Panel'))
                            Serenity.TemplatedDialog.closePanel(element);
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = Payer.DialogUtils || (Payer.DialogUtils = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Common;
    (function (Common) {
        var EnumSelectFormatter = /** @class */ (function () {
            function EnumSelectFormatter() {
                this.allowClear = true;
            }
            EnumSelectFormatter.prototype.format = function (ctx) {
                var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                var sb = "<select>";
                if (this.allowClear) {
                    sb += '<option value="">';
                    sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                    sb += '</option>';
                }
                for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                    var x = _a[_i];
                    sb += '<option value="' + Q.attrEncode(x) + '"';
                    if (x == ctx.value)
                        sb += " selected";
                    var name = enumType[x];
                    sb += ">";
                    sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                    sb += "</option>";
                }
                sb += "</select>";
                return sb;
            };
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "enumKey", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "allowClear", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
            EnumSelectFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], EnumSelectFormatter);
            return EnumSelectFormatter;
        }());
        Common.EnumSelectFormatter = EnumSelectFormatter;
    })(Common = Payer.Common || (Payer.Common = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.hint, 'Excel'),
                    title: Q.coalesce(options.title, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = Payer.Common || (Payer.Common = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Common;
    (function (Common) {
        var GridEditorBase = /** @class */ (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: this.getAddButtonCaption(),
                        cssClass: 'add-button',
                        onClick: function () {
                            _this.createEntityDialog(_this.getItemType(), function (dlg) {
                                var dialog = dlg;
                                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                                dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                            });
                        }
                    }];
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: true,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            GridEditorBase.prototype.enableDeleteColumn = function () {
                return false;
            };
            GridEditorBase.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                if (this.enableDeleteColumn()) {
                    columns.unshift({
                        field: 'Delete Row',
                        name: '',
                        format: function (ctx) { return '<a class="inline-action delete-row" title="delete">' +
                            '<i class="fa fa-trash-o text-red"></i></a>'; },
                        width: 24,
                        minWidth: 24,
                        maxWidth: 24
                    });
                }
                return columns;
            };
            GridEditorBase.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (this.enableDeleteColumn()) {
                        if (target.hasClass('delete-row')) {
                            Q.confirm(Q.text('Controls.EntityDialog.DeleteConfirmation'), function () {
                                _this.deleteEntity(item[_this.getIdProperty()]);
                            });
                        }
                    }
                }
            };
            GridEditorBase = __decorate([
                Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.editor(),
                Serenity.Decorators.element("<div/>")
            ], GridEditorBase);
            return GridEditorBase;
        }(Serenity.EntityGrid));
        Common.GridEditorBase = GridEditorBase;
    })(Common = Payer.Common || (Payer.Common = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Common;
    (function (Common) {
        var GridEditorDialog = /** @class */ (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            GridEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GridEditorDialog);
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = Payer.Common || (Payer.Common = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    var StaticTextBlock = /** @class */ (function (_super) {
        __extends(StaticTextBlock, _super);
        function StaticTextBlock(container, options) {
            var _this = _super.call(this, container, options) || this;
            // hide the caption label for this editor if in a form. ugly hack
            if (_this.options.hideLabel)
                _this.element.closest('.field').find('.caption').hide();
            _this.updateElementContent();
            return _this;
        }
        StaticTextBlock.prototype.updateElementContent = function () {
            var text = Q.coalesce(this.options.text, this.value);
            // if isLocalText is set, text is actually a local text key
            if (this.options.isLocalText)
                text = Q.text(text);
            // don't html encode if isHtml option is true
            if (this.options.isHtml)
                this.element.html(text);
            else
                this.element.text(text);
        };
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        StaticTextBlock.prototype.setEditValue = function (source, property) {
            if (this.options.text == null) {
                this.value = Q.coalesce(this.options.text, source[property.name]);
                this.updateElementContent();
            }
        };
        StaticTextBlock = __decorate([
            Serenity.Decorators.element("<div/>"),
            Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
        ], StaticTextBlock);
        return StaticTextBlock;
    }(Serenity.Widget));
    Payer.StaticTextBlock = StaticTextBlock;
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Common;
    (function (Common) {
        var LanguageSelection = /** @class */ (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    $.cookie('LanguagePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = Payer.Common || (Payer.Common = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Common;
    (function (Common) {
        var SidebarSearch = /** @class */ (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = Payer.Common || (Payer.Common = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Common;
    (function (Common) {
        var ThemeSelection = /** @class */ (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('ThemePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    var theme = select.val() || '';
                    var darkSidebar = theme.indexOf('light') < 0;
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + theme)
                        .toggleClass('dark-sidebar', darkSidebar)
                        .toggleClass('light-sidebar', !darkSidebar);
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = Payer.Common || (Payer.Common = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        // Print header of page
                        if (options.printDateTimeHeader == null || options.printDateTimeHeader) {
                            var beforePage = function (data) {
                                doc.setFontStyle('normal');
                                doc.setFontSize(8);
                                // Date and time of the report
                                doc.autoTableText(Q.formatDate(new Date(), "dd-MM-yyyy HH:mm"), doc.internal.pageSize.width - autoOptions.margin.right, 13, {
                                    halign: 'right'
                                });
                            };
                            autoOptions.beforePageContent = beforePage;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.fileName || options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        if (output == 'datauri')
                            doc.output(output);
                        else {
                            var tmpOut = doc.output('datauristring');
                            if (output == 'dataurlnewwindow') {
                                var fileTmpName = options.reportTitle || g.getTitle();
                                var url_with_name = tmpOut.replace("data:application/pdf;", "data:application/pdf;name=" + fileTmpName + ".pdf;");
                                var html = '<html>' +
                                    '<style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style>' +
                                    '<body>' +
                                    '<p></p>' +
                                    '<iframe type="application/pdf" src="' + url_with_name + '"></iframe>' +
                                    '</body></html>';
                                var a = window.open("about:blank", "_blank");
                                a.document.write(html);
                                a.document.close();
                            }
                        }
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = Payer.Common || (Payer.Common = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Common;
    (function (Common) {
        var ReportDialog = /** @class */ (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.updateInterface();
                _this.loadReport(_this.options.reportKey);
                return _this;
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.report.Properties
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.element.dialog().dialog('option', 'title', _this.report.Title);
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                Common.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Common.ReportDialog = ReportDialog;
    })(Common = Payer.Common || (Payer.Common = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = Payer.Common || (Payer.Common = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Common;
    (function (Common) {
        var ReportPage = /** @class */ (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = _super.call(this, element) || this;
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Common.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Common.ReportPage = ReportPage;
    })(Common = Payer.Common || (Payer.Common = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = /** @class */ (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = Payer.Common || (Payer.Common = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Default;
    (function (Default) {
        var CustomerTablesDialog = /** @class */ (function (_super) {
            __extends(CustomerTablesDialog, _super);
            function CustomerTablesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.CustomerTablesForm(_this.idPrefix);
                return _this;
            }
            CustomerTablesDialog.prototype.getFormKey = function () { return Default.CustomerTablesForm.formKey; };
            CustomerTablesDialog.prototype.getIdProperty = function () { return Default.CustomerTablesRow.idProperty; };
            CustomerTablesDialog.prototype.getLocalTextPrefix = function () { return Default.CustomerTablesRow.localTextPrefix; };
            CustomerTablesDialog.prototype.getService = function () { return Default.CustomerTablesService.baseUrl; };
            CustomerTablesDialog.prototype.getDeletePermission = function () { return Default.CustomerTablesRow.deletePermission; };
            CustomerTablesDialog.prototype.getInsertPermission = function () { return Default.CustomerTablesRow.insertPermission; };
            CustomerTablesDialog.prototype.getUpdatePermission = function () { return Default.CustomerTablesRow.updatePermission; };
            CustomerTablesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerTablesDialog);
            return CustomerTablesDialog;
        }(Serenity.EntityDialog));
        Default.CustomerTablesDialog = CustomerTablesDialog;
    })(Default = Payer.Default || (Payer.Default = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Default;
    (function (Default) {
        var CustomerTablesGrid = /** @class */ (function (_super) {
            __extends(CustomerTablesGrid, _super);
            function CustomerTablesGrid(container) {
                return _super.call(this, container) || this;
            }
            CustomerTablesGrid.prototype.getColumnsKey = function () { return 'Default.CustomerTables'; };
            CustomerTablesGrid.prototype.getDialogType = function () { return Default.CustomerTablesDialog; };
            CustomerTablesGrid.prototype.getIdProperty = function () { return Default.CustomerTablesRow.idProperty; };
            CustomerTablesGrid.prototype.getInsertPermission = function () { return Default.CustomerTablesRow.insertPermission; };
            CustomerTablesGrid.prototype.getLocalTextPrefix = function () { return Default.CustomerTablesRow.localTextPrefix; };
            CustomerTablesGrid.prototype.getService = function () { return Default.CustomerTablesService.baseUrl; };
            CustomerTablesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerTablesGrid);
            return CustomerTablesGrid;
        }(Serenity.EntityGrid));
        Default.CustomerTablesGrid = CustomerTablesGrid;
    })(Default = Payer.Default || (Payer.Default = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Default;
    (function (Default) {
        var CustomersDialog = /** @class */ (function (_super) {
            __extends(CustomersDialog, _super);
            function CustomersDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.CustomersForm(_this.idPrefix);
                return _this;
            }
            CustomersDialog.prototype.getFormKey = function () { return Default.CustomersForm.formKey; };
            CustomersDialog.prototype.getIdProperty = function () { return Default.CustomersRow.idProperty; };
            CustomersDialog.prototype.getLocalTextPrefix = function () { return Default.CustomersRow.localTextPrefix; };
            CustomersDialog.prototype.getNameProperty = function () { return Default.CustomersRow.nameProperty; };
            CustomersDialog.prototype.getService = function () { return Default.CustomersService.baseUrl; };
            CustomersDialog.prototype.getDeletePermission = function () { return Default.CustomersRow.deletePermission; };
            CustomersDialog.prototype.getInsertPermission = function () { return Default.CustomersRow.insertPermission; };
            CustomersDialog.prototype.getUpdatePermission = function () { return Default.CustomersRow.updatePermission; };
            CustomersDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomersDialog);
            return CustomersDialog;
        }(Serenity.EntityDialog));
        Default.CustomersDialog = CustomersDialog;
    })(Default = Payer.Default || (Payer.Default = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Default;
    (function (Default) {
        var CustomersGrid = /** @class */ (function (_super) {
            __extends(CustomersGrid, _super);
            function CustomersGrid(container) {
                return _super.call(this, container) || this;
            }
            CustomersGrid.prototype.getColumnsKey = function () { return 'Default.Customers'; };
            CustomersGrid.prototype.getDialogType = function () { return Default.CustomersDialog; };
            CustomersGrid.prototype.getIdProperty = function () { return Default.CustomersRow.idProperty; };
            CustomersGrid.prototype.getInsertPermission = function () { return Default.CustomersRow.insertPermission; };
            CustomersGrid.prototype.getLocalTextPrefix = function () { return Default.CustomersRow.localTextPrefix; };
            CustomersGrid.prototype.getService = function () { return Default.CustomersService.baseUrl; };
            CustomersGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomersGrid);
            return CustomersGrid;
        }(Serenity.EntityGrid));
        Default.CustomersGrid = CustomersGrid;
    })(Default = Payer.Default || (Payer.Default = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Default;
    (function (Default) {
        var ItemsDialog = /** @class */ (function (_super) {
            __extends(ItemsDialog, _super);
            function ItemsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.ItemsForm(_this.idPrefix);
                return _this;
            }
            ItemsDialog.prototype.getFormKey = function () { return Default.ItemsForm.formKey; };
            ItemsDialog.prototype.getIdProperty = function () { return Default.ItemsRow.idProperty; };
            ItemsDialog.prototype.getLocalTextPrefix = function () { return Default.ItemsRow.localTextPrefix; };
            ItemsDialog.prototype.getNameProperty = function () { return Default.ItemsRow.nameProperty; };
            ItemsDialog.prototype.getService = function () { return Default.ItemsService.baseUrl; };
            ItemsDialog.prototype.getDeletePermission = function () { return Default.ItemsRow.deletePermission; };
            ItemsDialog.prototype.getInsertPermission = function () { return Default.ItemsRow.insertPermission; };
            ItemsDialog.prototype.getUpdatePermission = function () { return Default.ItemsRow.updatePermission; };
            ItemsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ItemsDialog);
            return ItemsDialog;
        }(Serenity.EntityDialog));
        Default.ItemsDialog = ItemsDialog;
    })(Default = Payer.Default || (Payer.Default = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Default;
    (function (Default) {
        var ItemsGrid = /** @class */ (function (_super) {
            __extends(ItemsGrid, _super);
            function ItemsGrid(container) {
                return _super.call(this, container) || this;
            }
            ItemsGrid.prototype.getColumnsKey = function () { return 'Default.Items'; };
            ItemsGrid.prototype.getDialogType = function () { return Default.ItemsDialog; };
            ItemsGrid.prototype.getIdProperty = function () { return Default.ItemsRow.idProperty; };
            ItemsGrid.prototype.getInsertPermission = function () { return Default.ItemsRow.insertPermission; };
            ItemsGrid.prototype.getLocalTextPrefix = function () { return Default.ItemsRow.localTextPrefix; };
            ItemsGrid.prototype.getService = function () { return Default.ItemsService.baseUrl; };
            ItemsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ItemsGrid);
            return ItemsGrid;
        }(Serenity.EntityGrid));
        Default.ItemsGrid = ItemsGrid;
    })(Default = Payer.Default || (Payer.Default = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Default;
    (function (Default) {
        var MailsMessagesDialog = /** @class */ (function (_super) {
            __extends(MailsMessagesDialog, _super);
            function MailsMessagesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.MailsMessagesForm(_this.idPrefix);
                return _this;
            }
            MailsMessagesDialog.prototype.getFormKey = function () { return Default.MailsMessagesForm.formKey; };
            MailsMessagesDialog.prototype.getIdProperty = function () { return Default.MailsMessagesRow.idProperty; };
            MailsMessagesDialog.prototype.getLocalTextPrefix = function () { return Default.MailsMessagesRow.localTextPrefix; };
            MailsMessagesDialog.prototype.getNameProperty = function () { return Default.MailsMessagesRow.nameProperty; };
            MailsMessagesDialog.prototype.getService = function () { return Default.MailsMessagesService.baseUrl; };
            MailsMessagesDialog.prototype.getDeletePermission = function () { return Default.MailsMessagesRow.deletePermission; };
            MailsMessagesDialog.prototype.getInsertPermission = function () { return Default.MailsMessagesRow.insertPermission; };
            MailsMessagesDialog.prototype.getUpdatePermission = function () { return Default.MailsMessagesRow.updatePermission; };
            MailsMessagesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MailsMessagesDialog);
            return MailsMessagesDialog;
        }(Serenity.EntityDialog));
        Default.MailsMessagesDialog = MailsMessagesDialog;
    })(Default = Payer.Default || (Payer.Default = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Default;
    (function (Default) {
        var MailsMessagesGrid = /** @class */ (function (_super) {
            __extends(MailsMessagesGrid, _super);
            function MailsMessagesGrid(container) {
                return _super.call(this, container) || this;
            }
            MailsMessagesGrid.prototype.getColumnsKey = function () { return 'Default.MailsMessages'; };
            MailsMessagesGrid.prototype.getDialogType = function () { return Default.MailsMessagesDialog; };
            MailsMessagesGrid.prototype.getIdProperty = function () { return Default.MailsMessagesRow.idProperty; };
            MailsMessagesGrid.prototype.getInsertPermission = function () { return Default.MailsMessagesRow.insertPermission; };
            MailsMessagesGrid.prototype.getLocalTextPrefix = function () { return Default.MailsMessagesRow.localTextPrefix; };
            MailsMessagesGrid.prototype.getService = function () { return Default.MailsMessagesService.baseUrl; };
            MailsMessagesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MailsMessagesGrid);
            return MailsMessagesGrid;
        }(Serenity.EntityGrid));
        Default.MailsMessagesGrid = MailsMessagesGrid;
    })(Default = Payer.Default || (Payer.Default = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Default;
    (function (Default) {
        var PersonsDialog = /** @class */ (function (_super) {
            __extends(PersonsDialog, _super);
            function PersonsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.PersonsForm(_this.idPrefix);
                return _this;
            }
            PersonsDialog.prototype.getFormKey = function () { return Default.PersonsForm.formKey; };
            PersonsDialog.prototype.getIdProperty = function () { return Default.PersonsRow.idProperty; };
            PersonsDialog.prototype.getLocalTextPrefix = function () { return Default.PersonsRow.localTextPrefix; };
            PersonsDialog.prototype.getNameProperty = function () { return Default.PersonsRow.nameProperty; };
            PersonsDialog.prototype.getService = function () { return Default.PersonsService.baseUrl; };
            PersonsDialog.prototype.getDeletePermission = function () { return Default.PersonsRow.deletePermission; };
            PersonsDialog.prototype.getInsertPermission = function () { return Default.PersonsRow.insertPermission; };
            PersonsDialog.prototype.getUpdatePermission = function () { return Default.PersonsRow.updatePermission; };
            PersonsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PersonsDialog);
            return PersonsDialog;
        }(Serenity.EntityDialog));
        Default.PersonsDialog = PersonsDialog;
    })(Default = Payer.Default || (Payer.Default = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Default;
    (function (Default) {
        var PersonsGrid = /** @class */ (function (_super) {
            __extends(PersonsGrid, _super);
            function PersonsGrid(container) {
                return _super.call(this, container) || this;
            }
            PersonsGrid.prototype.getColumnsKey = function () { return 'Default.Persons'; };
            PersonsGrid.prototype.getDialogType = function () { return Default.PersonsDialog; };
            PersonsGrid.prototype.getIdProperty = function () { return Default.PersonsRow.idProperty; };
            PersonsGrid.prototype.getInsertPermission = function () { return Default.PersonsRow.insertPermission; };
            PersonsGrid.prototype.getLocalTextPrefix = function () { return Default.PersonsRow.localTextPrefix; };
            PersonsGrid.prototype.getService = function () { return Default.PersonsService.baseUrl; };
            PersonsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PersonsGrid);
            return PersonsGrid;
        }(Serenity.EntityGrid));
        Default.PersonsGrid = PersonsGrid;
    })(Default = Payer.Default || (Payer.Default = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Default;
    (function (Default) {
        var TipsDialog = /** @class */ (function (_super) {
            __extends(TipsDialog, _super);
            function TipsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.TipsForm(_this.idPrefix);
                return _this;
            }
            TipsDialog.prototype.getFormKey = function () { return Default.TipsForm.formKey; };
            TipsDialog.prototype.getIdProperty = function () { return Default.TipsRow.idProperty; };
            TipsDialog.prototype.getLocalTextPrefix = function () { return Default.TipsRow.localTextPrefix; };
            TipsDialog.prototype.getService = function () { return Default.TipsService.baseUrl; };
            TipsDialog.prototype.getDeletePermission = function () { return Default.TipsRow.deletePermission; };
            TipsDialog.prototype.getInsertPermission = function () { return Default.TipsRow.insertPermission; };
            TipsDialog.prototype.getUpdatePermission = function () { return Default.TipsRow.updatePermission; };
            TipsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TipsDialog);
            return TipsDialog;
        }(Serenity.EntityDialog));
        Default.TipsDialog = TipsDialog;
    })(Default = Payer.Default || (Payer.Default = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Default;
    (function (Default) {
        var TipsGrid = /** @class */ (function (_super) {
            __extends(TipsGrid, _super);
            function TipsGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.rowSelection = new Serenity.GridRowSelectionMixin(_this);
                return _this;
            }
            TipsGrid.prototype.getColumnsKey = function () { return 'Default.Tips'; };
            TipsGrid.prototype.getDialogType = function () { return Default.TipsDialog; };
            TipsGrid.prototype.getIdProperty = function () { return Default.TipsRow.idProperty; };
            TipsGrid.prototype.getInsertPermission = function () { return Default.TipsRow.insertPermission; };
            TipsGrid.prototype.getLocalTextPrefix = function () { return Default.TipsRow.localTextPrefix; };
            TipsGrid.prototype.getService = function () { return Default.TipsService.baseUrl; };
            TipsGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                //  columns.unshift(Serenity.GridRowSelectionMixin.createSelectColumn(() => this.rowSelection));
                Q.first(columns, function (x) { return x.field == "PullTip" /* PullTip */; }).format =
                    function (ctx) { return "<a href=\"javascript:;\" class=\"inline-action pull-tip\"><i class=\"btn btn-primary btn-sm\" style=\"line-height: 3px\">PULL</i></a>"; };
                return columns;
            };
            TipsGrid.prototype.PullTip = function (id) {
                id = window.prompt("Please Enter Id", "ID:");
                if (id != null)
                    window.location.href = Q.resolveUrl('~/Default/Tips/Pull?id=' + id);
            };
            TipsGrid.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('pull-tip')) {
                        this.PullTip(item.WaiterId);
                    }
                }
            };
            TipsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TipsGrid);
            return TipsGrid;
        }(Serenity.EntityGrid));
        Default.TipsGrid = TipsGrid;
    })(Default = Payer.Default || (Payer.Default = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Default;
    (function (Default) {
        var TransactionItemsDialog = /** @class */ (function (_super) {
            __extends(TransactionItemsDialog, _super);
            function TransactionItemsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.TransactionItemsForm(_this.idPrefix);
                return _this;
            }
            TransactionItemsDialog.prototype.getFormKey = function () { return Default.TransactionItemsForm.formKey; };
            TransactionItemsDialog.prototype.getIdProperty = function () { return Default.TransactionItemsRow.idProperty; };
            TransactionItemsDialog.prototype.getLocalTextPrefix = function () { return Default.TransactionItemsRow.localTextPrefix; };
            TransactionItemsDialog.prototype.getService = function () { return Default.TransactionItemsService.baseUrl; };
            TransactionItemsDialog.prototype.getDeletePermission = function () { return Default.TransactionItemsRow.deletePermission; };
            TransactionItemsDialog.prototype.getInsertPermission = function () { return Default.TransactionItemsRow.insertPermission; };
            TransactionItemsDialog.prototype.getUpdatePermission = function () { return Default.TransactionItemsRow.updatePermission; };
            TransactionItemsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TransactionItemsDialog);
            return TransactionItemsDialog;
        }(Serenity.EntityDialog));
        Default.TransactionItemsDialog = TransactionItemsDialog;
    })(Default = Payer.Default || (Payer.Default = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Default;
    (function (Default) {
        var TransactionItemsGrid = /** @class */ (function (_super) {
            __extends(TransactionItemsGrid, _super);
            function TransactionItemsGrid(container) {
                return _super.call(this, container) || this;
            }
            TransactionItemsGrid.prototype.getColumnsKey = function () { return 'Default.TransactionItems'; };
            TransactionItemsGrid.prototype.getDialogType = function () { return Default.TransactionItemsDialog; };
            TransactionItemsGrid.prototype.getIdProperty = function () { return Default.TransactionItemsRow.idProperty; };
            TransactionItemsGrid.prototype.getInsertPermission = function () { return Default.TransactionItemsRow.insertPermission; };
            TransactionItemsGrid.prototype.getLocalTextPrefix = function () { return Default.TransactionItemsRow.localTextPrefix; };
            TransactionItemsGrid.prototype.getService = function () { return Default.TransactionItemsService.baseUrl; };
            TransactionItemsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TransactionItemsGrid);
            return TransactionItemsGrid;
        }(Serenity.EntityGrid));
        Default.TransactionItemsGrid = TransactionItemsGrid;
    })(Default = Payer.Default || (Payer.Default = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Default;
    (function (Default) {
        var TransactionsDialog = /** @class */ (function (_super) {
            __extends(TransactionsDialog, _super);
            function TransactionsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.TransactionsForm(_this.idPrefix);
                return _this;
            }
            TransactionsDialog.prototype.getFormKey = function () { return Default.TransactionsForm.formKey; };
            TransactionsDialog.prototype.getIdProperty = function () { return Default.TransactionsRow.idProperty; };
            TransactionsDialog.prototype.getLocalTextPrefix = function () { return Default.TransactionsRow.localTextPrefix; };
            TransactionsDialog.prototype.getNameProperty = function () { return Default.TransactionsRow.nameProperty; };
            TransactionsDialog.prototype.getService = function () { return Default.TransactionsService.baseUrl; };
            TransactionsDialog.prototype.getDeletePermission = function () { return Default.TransactionsRow.deletePermission; };
            TransactionsDialog.prototype.getInsertPermission = function () { return Default.TransactionsRow.insertPermission; };
            TransactionsDialog.prototype.getUpdatePermission = function () { return Default.TransactionsRow.updatePermission; };
            TransactionsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TransactionsDialog);
            return TransactionsDialog;
        }(Serenity.EntityDialog));
        Default.TransactionsDialog = TransactionsDialog;
    })(Default = Payer.Default || (Payer.Default = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Default;
    (function (Default) {
        var TransactionsGrid = /** @class */ (function (_super) {
            __extends(TransactionsGrid, _super);
            //private rowSelection: Serenity.GridRowSelectionMixin;
            function TransactionsGrid(container) {
                return _super.call(this, container) || this;
                //this.rowSelection = new Serenity.GridRowSelectionMixin(this);
            }
            TransactionsGrid.prototype.getColumnsKey = function () { return 'Default.Transactions'; };
            TransactionsGrid.prototype.getDialogType = function () { return Default.TransactionsDialog; };
            TransactionsGrid.prototype.getIdProperty = function () { return Default.TransactionsRow.idProperty; };
            TransactionsGrid.prototype.getInsertPermission = function () { return Default.TransactionsRow.insertPermission; };
            TransactionsGrid.prototype.getLocalTextPrefix = function () { return Default.TransactionsRow.localTextPrefix; };
            TransactionsGrid.prototype.getService = function () { return Default.TransactionsService.baseUrl; };
            TransactionsGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                // columns.unshift(Serenity.GridRowSelectionMixin.createSelectColumn(() => this.rowSelection));
                Q.first(columns, function (x) { return x.field == "GenerateQrCode" /* GenerateQrCode */; }).format =
                    function (ctx) { return "<a href=\"javascript:;\" class=\"inline-action generate-qr-code\"><i class=\"fa fa-qrcode\"></i></a>"; };
                return columns;
            };
            TransactionsGrid.prototype.generateQrCode = function (id) {
                window.location.href = Q.resolveUrl('~/Default/Transactions/DisplayQrCode?id=' + id);
                //later, try to put this href in a new tab and not the current window
            };
            TransactionsGrid.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('generate-qr-code')) {
                        this.generateQrCode(item.Id);
                    }
                }
            };
            TransactionsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TransactionsGrid);
            return TransactionsGrid;
        }(Serenity.EntityGrid));
        Default.TransactionsGrid = TransactionsGrid;
    })(Default = Payer.Default || (Payer.Default = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Default;
    (function (Default) {
        var WaitersDialog = /** @class */ (function (_super) {
            __extends(WaitersDialog, _super);
            function WaitersDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.WaitersForm(_this.idPrefix);
                return _this;
            }
            WaitersDialog.prototype.getFormKey = function () { return Default.WaitersForm.formKey; };
            WaitersDialog.prototype.getIdProperty = function () { return Default.WaitersRow.idProperty; };
            WaitersDialog.prototype.getLocalTextPrefix = function () { return Default.WaitersRow.localTextPrefix; };
            WaitersDialog.prototype.getService = function () { return Default.WaitersService.baseUrl; };
            WaitersDialog.prototype.getDeletePermission = function () { return Default.WaitersRow.deletePermission; };
            WaitersDialog.prototype.getInsertPermission = function () { return Default.WaitersRow.insertPermission; };
            WaitersDialog.prototype.getUpdatePermission = function () { return Default.WaitersRow.updatePermission; };
            WaitersDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], WaitersDialog);
            return WaitersDialog;
        }(Serenity.EntityDialog));
        Default.WaitersDialog = WaitersDialog;
    })(Default = Payer.Default || (Payer.Default = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Default;
    (function (Default) {
        var WaitersGrid = /** @class */ (function (_super) {
            __extends(WaitersGrid, _super);
            function WaitersGrid(container) {
                return _super.call(this, container) || this;
            }
            WaitersGrid.prototype.getColumnsKey = function () { return 'Default.Waiters'; };
            WaitersGrid.prototype.getDialogType = function () { return Default.WaitersDialog; };
            WaitersGrid.prototype.getIdProperty = function () { return Default.WaitersRow.idProperty; };
            WaitersGrid.prototype.getInsertPermission = function () { return Default.WaitersRow.insertPermission; };
            WaitersGrid.prototype.getLocalTextPrefix = function () { return Default.WaitersRow.localTextPrefix; };
            WaitersGrid.prototype.getService = function () { return Default.WaitersService.baseUrl; };
            WaitersGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], WaitersGrid);
            return WaitersGrid;
        }(Serenity.EntityGrid));
        Default.WaitersGrid = WaitersGrid;
    })(Default = Payer.Default || (Payer.Default = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Membership;
    (function (Membership) {
        var LoginPanel = /** @class */ (function (_super) {
            __extends(LoginPanel, _super);
            function LoginPanel(container) {
                var _this = _super.call(this, container) || this;
                $.fn['vegas'] && $('body')['vegas']({
                    delay: 30000,
                    cover: true,
                    overlay: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAAA3NCSVQICAjb4U" +
                        "/gAAAABlBMVEX///8AAABVwtN+AAAAAnRSTlMA/1uRIrUAAAAJcEhZcwAAAsQAAALEAVuRnQsAAAAWdEVYdENyZWF0" +
                        "aW9uIFRpbWUAMDQvMTMvMTGrW0T6AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M1cbXjNgAAAAxJREFUCJljaGBgAAABhACBrONIPgAAAABJRU5ErkJggg==",
                    slides: [
                        { src: Q.resolveUrl("~/Content/site/slides/slide1.jpg"), transition: 'fade' },
                        { src: Q.resolveUrl("~/Content/site/slides/slide2.jpg"), transition: 'zoomOut' },
                        { src: Q.resolveUrl("~/Content/site/slides/slide3.jpg"), transition: 'swirlLeft' }
                    ]
                });
                _this.byId('LoginButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/Login'),
                        request: request,
                        onSuccess: function (response) {
                            _this.redirectToReturnUrl();
                        },
                        onError: function (response) {
                            if (response != null && response.Error != null && response.Error.Code == "RedirectUserTo") {
                                window.location.href = response.Error.Arguments;
                                return;
                            }
                            if (response != null && response.Error != null && !Q.isEmptyOrNull(response.Error.Message)) {
                                Q.notifyError(response.Error.Message);
                                $('#Password').focus();
                                return;
                            }
                            Q.ErrorHandling.showServiceError(response.Error);
                        }
                    });
                });
                return _this;
            }
            LoginPanel.prototype.getFormKey = function () { return Membership.LoginForm.formKey; };
            LoginPanel.prototype.redirectToReturnUrl = function () {
                var q = Q.parseQueryString();
                var returnUrl = q['returnUrl'] || q['ReturnUrl'];
                if (returnUrl) {
                    var hash = window.location.hash;
                    if (hash != null && hash != '#')
                        returnUrl += hash;
                    window.location.href = returnUrl;
                }
                else {
                    window.location.href = Q.resolveUrl('~/');
                }
            };
            LoginPanel.prototype.getTemplate = function () {
                return "\n<div class=\"flex-layout\">\n    <div class=\"logo\"></div>\n    <h3>" + Q.text("Forms.Membership.Login.FormTitle") + "</h3>\n    <form id=\"~_Form\" action=\"\">\n        <div class=\"s-Form\">\n            <div class=\"fieldset ui-widget ui-widget-content ui-corner-all\">\n                <div id=\"~_PropertyGrid\"></div>\n                <div class=\"clear\"></div>\n            </div>\n            <div class=\"buttons\">\n                <button id=\"~_LoginButton\" type=\"submit\" class=\"btn btn-primary\">\n                    " + Q.text("Forms.Membership.Login.SignInButton") + "\n                </button>\n            </div>\n            <div class=\"actions\">\n                <a href=\"" + Q.resolveUrl('~/Account/ForgotPassword') + "\"><i class=\"fa fa-angle-right\"></i>&nbsp;" + Q.text("Forms.Membership.Login.ForgotPassword") + "</a>\n                <a href=\"" + Q.resolveUrl('~/Account/SignUp') + "\"><i class=\"fa fa-angle-right\"></i>&nbsp;" + Q.text("Forms.Membership.Login.SignUpButton") + "</a>\n                <div class=\"clear\"></div>\n            </div>\n        </div>\n    </form>\n</div>\n";
            };
            LoginPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], LoginPanel);
            return LoginPanel;
        }(Serenity.PropertyPanel));
        Membership.LoginPanel = LoginPanel;
    })(Membership = Payer.Membership || (Payer.Membership = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = /** @class */ (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('NewPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = Payer.Membership || (Payer.Membership = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = /** @class */ (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = Payer.Membership || (Payer.Membership = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = /** @class */ (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = Payer.Membership || (Payer.Membership = {}));
})(Payer || (Payer = {}));
var Payer;
(function (Payer) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = /** @class */ (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = Payer.Membership || (Payer.Membership = {}));
})(Payer || (Payer = {}));
//# sourceMappingURL=Payer.Web.js.map