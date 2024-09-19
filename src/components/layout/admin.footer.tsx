"use client";
import { Footer } from "antd/es/layout/layout";
import React from "react";

const AdminFooter = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      BHCode©{new Date().getFullYear()} Created by HBCODE
    </Footer>
  );
};

export default AdminFooter;
