import Head from "next/head";
import React from "react";
import AuthCheck from "../../components/AuthCheck";

export default function AdminsPostPage(props) {
  return (
    <main>
      <AuthCheck></AuthCheck>
    </main>
  );
}
