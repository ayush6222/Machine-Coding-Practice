"use client";

import { useRouter, usePathname } from "next/navigation";

const tasks = [
  { name: "Home", link: "/" },
  { name: "Stopwatch", link: "/stopwatch" },
  { name: "Fetch API", link: "/fetch_api" },
  { name: "Debounce", link: "/debounce" }
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(e.target.value);
  };

  const handleNavigation = (link: string) => {
    router.push(link);
  };

  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <div style={{ display: "flex", height: "100vh" }}>
          <div
            style={{
              width: "30%",
              padding: "20px",
              borderRight: "1px solid #ddd",
            }}
          >
            <h3>Tasks</h3>

            <select
              value={pathname}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px", marginBottom: "20px" }}
            >
              {tasks.map((task) => (
                <option key={task.link} value={task.link}>
                  {task.name}
                </option>
              ))}
            </select>

            <ul style={{ paddingLeft: "16px" }}>
              {tasks.map((task, index) => (
                <li
                  key={task.link}
                  onClick={() => handleNavigation(task.link)}
                  style={{
                    cursor: "pointer",
                    marginBottom: "10px",
                    fontWeight:
                      pathname === task.link ? "bold" : "normal",
                    color:
                      pathname === task.link ? "#0070f3" : "#000",
                  }}
                >
                  {index + 1}. {task.name}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ width: "70%", padding: "20px" }}>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
