/*!
 * JEC JUTA Node Module
 * Copyright(c) 2017 Pascal ECHEMANN
 * Apache 2.0 Licensed
 * This is a part of the JEC Projects: <https://github.com/pechemann/JEC>
 */

declare module "jec-juta" {

export function After(params?: AnnotatedMethodParams): Function;export function AfterAll(params?: AnnotatedMethodParams): Function;export function AfterClass(params?: AnnotatedMethodParams): Function;export function Async(target: Object, propertyKey: string | symbol, parameterIndex: number): void;export function Before(params?: AnnotatedMethodParams): Function;export function BeforeAll(params?: AnnotatedMethodParams): Function;export function BeforeClass(params?: AnnotatedMethodParams): Function;export interface AnnotatedMethodParams {    timeout?: number;    async?: boolean;    disabled?: boolean;}export interface TestParams extends AnnotatedMethodParams {    description: string;    repeat?: number;    order?: number;}export interface TestSuiteParams {    description: string;    disabled?: boolean;    testOrder?: number;    instanciationPolicy?: string;}export function Test(params: TestParams): Function;export function TestSuite(params: TestSuiteParams): Function;export class TestSuiteError extends Error {    constructor(message: string);}export class JutaConnectorRefs {    static readonly TEST_CONNECTOR_REF: string;    static readonly TEST_SUITE_CONNECTOR_REF: string;    static readonly BEFORE_CLASS_CONNECTOR_REF: string;    static readonly BEFORE_ALL_CONNECTOR_REF: string;    static readonly BEFORE_CONNECTOR_REF: string;    static readonly AFTER_CLASS_CONNECTOR_REF: string;    static readonly AFTER_ALL_CONNECTOR_REF: string;    static readonly AFTER_CONNECTOR_REF: string;    static readonly ASYNC_CONNECTOR_REF: string;}export interface AnnotatedMethod extends TestableMethod {    type: number;}export interface RunableTestSuite {    getTestSuite(): any;    setTestSuite(testSuite: any): void;    getTestMethods(): TestMethod[];    getDescription(): string;    getAnnotatedMethods(): AnnotatedMethod[];    isDisabled(): boolean;    getTestOrder(): number;    getInstanciationPolicy(): string;}export interface TestableMethod {    name: string;    timeout: number;    async: boolean;    disabled: boolean;}export interface TestMethod extends TestableMethod {    description: string;    repeat: number;    order: number;}export interface TestRunner {    runTest(testSuite: RunableTestSuite, callback: (stats: TestStats) => void): void;    runAllTests(testSuiteColl: RunableTestSuite[], callback: (stats: TestStats) => void): void;}export interface TestStats {    numTestSuites: number;    numDisabledTestSuites: number;    numTests: number;    numDisabledTests: number;    numAsyncTests: number;    duration: number;    time: string;    error: any;}export enum AnnotatedMethodType {    BEFORE_CLASS = 0,    AFTER_CLASS = 1,    BEFORE_ALL = 2,    AFTER_ALL = 3,    BEFORE = 4,    AFTER = 5,}export class InstanciationPolicy {    static readonly MULTIPLE: string;    static readonly SINGLE: string;}export enum TestSorters {    DEFAULT = 0,    NAME_ASCENDING = 1,    NAME_DESCENDING = 2,    ORDER_ASCENDING = 3,    ORDER_DESCENDING = 4,}
}