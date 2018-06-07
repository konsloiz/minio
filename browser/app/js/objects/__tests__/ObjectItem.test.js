/*
 * Minio Cloud Storage (C) 2018 Minio, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from "react"
import { shallow } from "enzyme"
import { ObjectItem } from "../ObjectItem"

describe("ObjectItem", () => {
  it("should render without crashing", () => {
    shallow(<ObjectItem name={"test"} />)
  })

  it("should render with content type", () => {
    const wrapper = shallow(<ObjectItem name={"test.jpg"} contentType={""} />)
    expect(wrapper.prop("data-type")).toBe("image")
  })

  it("should call checkObject when the object is selected", () => {
    const checkObject = jest.fn()
    const wrapper = shallow(<ObjectItem name={"test"} checked={false} checkObject={checkObject} />)
    wrapper.find("a").simulate("click", { preventDefault: jest.fn() })
    expect(checkObject).toHaveBeenCalledWith("test")
  })

  it("should render highlighted row when object is selected", () => {
    const wrapper = shallow(<ObjectItem name={"test"} checked={true} />)
    expect(wrapper.find(".fesl-row").hasClass("fesl-row-selected")).toBeTruthy()
  })

  it("should call uncheckObject when the object is deselected", () => {
    const uncheckObject = jest.fn()
    const wrapper = shallow(<ObjectItem name={"test"} checked={true} uncheckObject={uncheckObject} />)
    wrapper.find("a").simulate("click", { preventDefault: jest.fn() })
    expect(uncheckObject).toHaveBeenCalledWith("test")
  })
})
