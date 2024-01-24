import React, { useState } from "react";
import { Divider, Radio, Table, Button, Image, Modal } from "antd";
import eye from "../../Assets/Members/eye.png";
import pen from "../../Assets/Members/pen.png";
import avatar from "../../Assets/Members/avatar.png";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    render: (text) => (
      <Image
        width={24}
        preview={false}
        style={{ borderRadius: "50px" }}
        src={avatar}
      />
    ),
  },
  {
    title: "Email Address",
    dataIndex: "email",
  },
  {
    title: "Phone Number",
    dataIndex: "phone",
  },
  {
    title: "Actions",
    dataIndex: "action",
    render: (text, record) => (
      <div style={{ display: "flex", gap: "5px" }}>
        <div>
          <Image preview={false} style={{ cursor: "pointer" }} src={eye} />
        </div>
        <div>
          <Image preview={false} style={{ cursor: "pointer" }} src={pen} />
        </div>
      </div>
    ),
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    email: "anas@macworldtechnology.com",
    phone: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    email: "anas@macworldtechnology.com",
    phone: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    email: "anas@macworldtechnology.com",
    phone: "Sydney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Disabled User",
    email: "anas@macworldtechnology.com",
    phone: "Sydney No. 1 Lake Park",
  },
];

export default function Members() {
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record) => ({
      // Column configuration not to be checked
      name: record.name,
    }),
  };

  const [selectionType, setSelectionType] = useState("checkbox");
  return (
    <div>
      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
}
