"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config"); // ✅ обязательно первой строкой
var supabase_1 = require("../lib/supabase");
function checkAndInsertData() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, industries, industriesError, _b, solutions, solutionsError, _c, achievements, achievementsError, error, error, error, error_1;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 10, , 11]);
                    console.log('Checking Supabase tables...');
                    return [4 /*yield*/, supabase_1.supabase
                            .from('industries')
                            .select('*')];
                case 1:
                    _a = _d.sent(), industries = _a.data, industriesError = _a.error;
                    console.log('Industries:', {
                        count: (industries === null || industries === void 0 ? void 0 : industries.length) || 0,
                        error: industriesError
                    });
                    return [4 /*yield*/, supabase_1.supabase
                            .from('solutions')
                            .select('*')];
                case 2:
                    _b = _d.sent(), solutions = _b.data, solutionsError = _b.error;
                    console.log('Solutions:', {
                        count: (solutions === null || solutions === void 0 ? void 0 : solutions.length) || 0,
                        error: solutionsError
                    });
                    return [4 /*yield*/, supabase_1.supabase
                            .from('achievements')
                            .select('*')];
                case 3:
                    _c = _d.sent(), achievements = _c.data, achievementsError = _c.error;
                    console.log('Achievements:', {
                        count: (achievements === null || achievements === void 0 ? void 0 : achievements.length) || 0,
                        error: achievementsError
                    });
                    if (!!(industries === null || industries === void 0 ? void 0 : industries.length)) return [3 /*break*/, 5];
                    console.log('Inserting test industries...');
                    return [4 /*yield*/, supabase_1.supabase
                            .from('industries')
                            .insert([
                            {
                                title: 'Test Industry 1',
                                description: 'Test Description 1',
                                icon: 'TransportIcon',
                                services: ['Service 1', 'Service 2']
                            }
                        ])];
                case 4:
                    error = (_d.sent()).error;
                    if (error) {
                        console.error('Error inserting test industry:', error);
                    }
                    _d.label = 5;
                case 5:
                    if (!!(solutions === null || solutions === void 0 ? void 0 : solutions.length)) return [3 /*break*/, 7];
                    console.log('Inserting test solutions...');
                    return [4 /*yield*/, supabase_1.supabase
                            .from('solutions')
                            .insert([
                            {
                                title: 'Test Solution 1',
                                description: 'Test Description 1',
                                services: ['Service 1', 'Service 2']
                            }
                        ])];
                case 6:
                    error = (_d.sent()).error;
                    if (error) {
                        console.error('Error inserting test solution:', error);
                    }
                    _d.label = 7;
                case 7:
                    if (!!(achievements === null || achievements === void 0 ? void 0 : achievements.length)) return [3 /*break*/, 9];
                    console.log('Inserting test achievements...');
                    return [4 /*yield*/, supabase_1.supabase
                            .from('achievements')
                            .insert([
                            {
                                value: 'Test Value 1',
                                title: 'Test Achievement 1',
                                description: 'Test Description 1'
                            }
                        ])];
                case 8:
                    error = (_d.sent()).error;
                    if (error) {
                        console.error('Error inserting test achievement:', error);
                    }
                    _d.label = 9;
                case 9: return [3 /*break*/, 11];
                case 10:
                    error_1 = _d.sent();
                    console.error('Script error:', error_1);
                    return [3 /*break*/, 11];
                case 11: return [2 /*return*/];
            }
        });
    });
}
checkAndInsertData();
