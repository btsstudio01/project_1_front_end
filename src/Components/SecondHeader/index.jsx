import { ReactComponent as Plus } from "../../Assets/Members/plus.svg";
import { ReactComponent as Search } from "../../Assets/Members/search.svg";
import { notification } from "antd";

import { Input, Modal, Button } from "antd";

import Avatar from "../../Assets/Members/headerImage.png";
import { useState } from "react";

const TopHeader = ({ setData, data }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (fieldName) => (e) => {
    setFormData({
      ...formData,
      [fieldName]: e.target.value,
    });

    console.log({ ...formData, [fieldName]: e.target.value });
  };

  const handleSubmit = () => {
    const newUser = { key: data.length + 1, ...formData };
    notification.success({
      message: "Form Submitted",
      description: "Your form has been submitted successfully.",
    });
    setData([...data, newUser]);
    setIsModalOpen(false);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal
        title="Add Member"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >

        <div className="border-t border-gray-400 pl-4 w-70 pt-4">

          <div className="border-l border-gray-400 pl-4 pt-4">
            <div>
              <h2 className="font-bold">Personal</h2>
              <div className="flex flex-col">
                <div className="flex gap-6">
                  <span>
                    First Name :{" "}
                    <Input value={formData.name} onChange={handleInputChange("name")} />
                  </span>
                  <span>
                    Last Name :{" "}
                    <Input value={formData.name} onChange={handleInputChange("name")} />
                  </span>
                </div>
                <div className="flex gap-6">
                  <span>
                    Email :{" "}
                    <Input
                      value={formData.email}
                      onChange={handleInputChange("email")}
                    />
                  </span>
                  <span>
                    Phone :{" "}
                    <Input
                      value={formData.phone}
                      onChange={handleInputChange("phone")}
                    />
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-bold mt-6">Business</h2>
              <div className="flex flex-col gap-6">
                <div className="flex gap-6">
                  <span>
                    Business Name :{" "}
                    <Input value={formData.name} onChange={handleInputChange("name")} />
                  </span>
                  <span>
                    Business Email :{" "}
                    <Input value={formData.name} onChange={handleInputChange("name")} />
                  </span>
                </div>
                <div className="flex gap-6">
                  <span>
                    Business Phone :{" "}
                    <Input
                      value={formData.email}
                      onChange={handleInputChange("email")}
                    />
                  </span>
                  <span>
                    Notes:{" "}
                    <Input
                      value={formData.phone}
                      onChange={handleInputChange("phone")}
                    />
                  </span>
                </div>
              </div>
              <Button
                style={{ marginTop: "13px", backgroundColor: "#4CAF50", position: "absolute" }}
                onClick={handleSubmit}
              >
                Save
              </Button>

            </div>
          </div>
        </div>

      </Modal>
      <div
        style={{
          marginTop: "24px",
          ft: "40px",
          marginRight: "40px",
          paddingTop: "12px",
          paddingBottom: "12px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", gap: 18 }}>
          {/* <Hamburger />  */}
          <span style={{ fontWeight: "bold", color: "black" }}>All Member</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              alignItems: "center",
              gap: "15px",
              backgroundColor: "#F1F5F9",
              paddingTop: "8px",
              paddingBottom: "8px",
              paddingLeft: "15px",
              paddingRight: "15px",
              borderRadius: "9px",
            }}
          >
            <input
              placeholder="Search member"
              type="text"
              style={{ outline: "none", backgroundColor: "#F1F5F9" }}
            />
            <Search style={{ height: 15, width: 15 }} />
          </div>
          <span
            onClick={showModal}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              backgroundColor: "#6366f1",
              paddingLeft: "18px",
              paddingRight: "18px",
              paddingTop: "7px",
              paddingBottom: "7px",
              borderRadius: "9px",
              cursor: "pointer",
            }}
          >
            <Plus style={{ height: 15, width: 15 }} />
            <span style={{ color: "whitesmoke", cursor: "pointer" }}>
              Add Member
            </span>
          </span>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
