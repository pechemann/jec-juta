//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2017 Pascal ECHEMANN.
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

import "mocha";
import {expect} from "chai";

// Class to test:
import {InstanciationPolicy} from "../../../../../src/com/jec/juta/utils/InstanciationPolicy";

// Utilities:
import * as utils from "../../../../../utils/test-utils/utilities/InstanciationPolicyTestUtils";

// Test:
describe("InstanciationPolicy", ()=> {

  describe("#MULTIPLE", ()=> {
    it("MULTIPLE should return 'multiple'", function() {
      expect(InstanciationPolicy.MULTIPLE).to.equal(utils.MULTIPLE);
    });
  });
  
  describe("#SINGLE", ()=> {
    it("SINGLE should return 'single'", function() {
      expect(InstanciationPolicy.SINGLE).to.equal(utils.SINGLE);
    });
  });
});