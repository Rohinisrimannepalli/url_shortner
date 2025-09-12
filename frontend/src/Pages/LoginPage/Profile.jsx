import React, { useEffect, useState } from 'react';
import { Center, Text, Loader, Stack } from '@mantine/core';
import Service from '../../utils/http';

const obj = new Service();

export default function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const getProfileData = async () => {
    try {
      let data = await obj.get("user/me");
      setUser(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProfileData();
  }, []);

  if (loading) {
    return (
      <Center style={{ minHeight: "100vh" }}>
        <Loader />
      </Center>
    );
  }

  return (
    <div
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Stack
        align="center"
        spacing="md"
        style={{
          background: "rgba(217, 222, 227, 0.9)",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        {/* Profile Picture */}
        {user?.avatar && (
          <div
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "3px solid white",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            }}
          >
            <img
              src={user.avatar}
              alt="Profile"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        )}

        {/* Name */}
        <Text c="black" fw={600} size="xl">
          {user?.name}
        </Text>

        <hr style={{ width: "100%", border: "1px solid #ccc" }} />

        {/* Email */}
        <Text c="black" size="md">
          {user?.email}
        </Text>
      </Stack>
    </div>
  );
}
