import React, { useState } from "react";
import { Divider, Radio, Table, Button, Image, Modal } from "antd";
import eye from "../../Assets/Members/eye.png";
import pen from "../../Assets/Members/pen.png";
import avatar from "../../Assets/Members/avatar.png";
import SecondHeader from "../../Components/SecondHeader";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    render: (text) => {
      return (
        <div style={{ display: "flex", gap: 20 }}>
          <Image
            width={24}
            preview={false}
            style={{ borderRadius: "50px" }}
            src={avatar}
          />
          <span style={{ fontSize: "14px", fontWeight: 600, color: "black" }}>
            {text}
          </span>
        </div>
      );
    },
  },
  {
    title: "Email Address",
    dataIndex: "email",
    render: (text, record) => (
      <>
        <span style={{ color: "#475467", fontWeight: 400 }}>{text}</span>
      </>
    ),
  },
  {
    title: "Phone Number",
    dataIndex: "phone",
    render: (text, record) => (
      <>
        <span style={{ color: "#475467", fontWeight: 400 }}>{text}</span>
      </>
    ),
  },
  {
    title: "Actions",
    dataIndex: "action",
    render: (text, record) => (
      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <div
          style={{
            border: "1px solid #6366F1",
            padding: "4px",
            borderRadius: "5px",
            display: "flex",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          <Image preview={false} style={{ cursor: "pointer" }} src={eye} />
        </div>
        <div>
          <Image preview={false} style={{ cursor: "pointer" }} src={pen} />
        </div>
      </div>
    ),
  },
];

export default function Members() {
  const [data, setData] = useState([
    {
      key: 1,
      name: "John Brown",
      email: "anas@macworldtechnology.com",
      phone: "New York No. 1 Lake Park",
    },
    {
      key: 2,
      name: "Jim Green",
      email: "anas@macworldtechnology.com",
      phone: "London No. 1 Lake Park",
    },
    {
      key: 3,
      name: "Joe Black",
      email: "anas@macworldtechnology.com",
      phone: "Sydney No. 1 Lake Park",
    },
    {
      key: 4,
      name: "Disabled User",
      email: "anas@macworldtechnology.com",
      phone: "Sydney No. 1 Lake Park",
    },
  ]);
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
    <>
      <SecondHeader setData={setData} data={data} />
      <div>
        <Table
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          columns={columns}
          dataSource={data}
          pagination={false}
        />
      </div>
    </>
  );
}
