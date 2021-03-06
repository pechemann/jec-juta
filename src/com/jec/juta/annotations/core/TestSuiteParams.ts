//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2018 Pascal ECHEMANN.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.

/**
 * The <code>TestSuiteParams</code> interface defines the API you must implement  
 * to create objects passed as parameter of the JUTA <code>@TestSuite</code>
 * decorator.
 */
export interface TestSuiteParams {
  
  /**
   * The desciption for a test suite.
   */
  description:string;

  /**
   * Indicates whether a test suite has to be ignored (<code>true</code>), or 
   * not (<code>false</code>).
   */
  disabled?:boolean;

  /**
   * Changes the test execution order.
   */
  testOrder?:number;

  /**
   * Indicates the policy used to create test class instances. Valid values are
   * the constants of the <code>InstantiationPolicy</code> class.
   */
  instantiationPolicy?:string;
}
