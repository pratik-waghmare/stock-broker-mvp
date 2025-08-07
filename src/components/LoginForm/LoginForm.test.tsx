import { beforeEach, describe, expect, it } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LoginForm from ".";
import { useAuthStore } from "@/store/authStore";

describe("Login Form", () => {
  beforeEach(() => {
    // Reset Zustand store before each test
    useAuthStore.getState().setBroker(null);

    // render form
    const queryClient = new QueryClient();

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/holdings" element={<h1>Holdings</h1>} />
          </Routes>
        </MemoryRouter>
      </QueryClientProvider>
    );
  });

  it("should show brokers first and select broker when clicked", async () => {
    // check if fields are there
    const brokerInput = screen.getByText("Login with broker");

    expect(brokerInput).toBeInTheDocument();

    const brokerOptions = await screen.findAllByAltText(
      /Zerodha|Groww|Upstocks|Angel One|Kotak Sec|HDFC Sec/i
    );
    expect(brokerOptions).toHaveLength(6);

    fireEvent.click(brokerOptions?.[0]);

    expect(screen.getByText("Selected Broker:")).toBeInTheDocument();
    expect(screen.getByText("Zerodha")).toBeInTheDocument();
  });

  it("should have username and password", async () => {
    // check if fields are there
    const brokerInput = screen.getByText("Login with broker");

    expect(brokerInput).toBeInTheDocument();

    const brokerOptions = await screen.findAllByAltText(
      /Zerodha|Groww|Upstocks|Angel One|Kotak Sec|HDFC Sec/i
    );
    expect(brokerOptions).toHaveLength(6);

    fireEvent.click(brokerOptions?.[0]);

    expect(screen.getByText("Selected Broker:")).toBeInTheDocument();
    expect(screen.getByText("Zerodha")).toBeInTheDocument();
    expect(screen.getByLabelText("Username or Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
  });

  it("should show error for invalid username and password", async () => {
    // check if fields are there
    const brokerInput = screen.getByText("Login with broker");

    expect(brokerInput).toBeInTheDocument();

    const brokerOptions = await screen.findAllByAltText(
      /Zerodha|Groww|Upstocks|Angel One|Kotak Sec|HDFC Sec/i
    );
    expect(brokerOptions).toHaveLength(6);

    fireEvent.click(brokerOptions?.[0]);

    expect(screen.getByText("Selected Broker:")).toBeInTheDocument();
    expect(screen.getByText("Zerodha")).toBeInTheDocument();

    const loginButton = screen.getByText("Login");

    const passInput = screen.getByLabelText("Password");

    fireEvent.change(passInput, {
      target: {
        value: "liquide-pass",
      },
    });

    fireEvent.click(loginButton);

    expect(
      await screen.findByText("Invalid email address")
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
  });

  it("should successfully login with correct creds", async () => {
    const brokerInput = await screen.findByText("Login with broker");

    expect(brokerInput).toBeInTheDocument();

    const brokerOptions = await screen.findAllByAltText(
      /Zerodha|Groww|Upstocks|Angel One|Kotak Sec|HDFC Sec/i
    );
    expect(brokerOptions).toHaveLength(6);

    fireEvent.click(brokerOptions?.[0]);

    expect(screen.getByText("Selected Broker:")).toBeInTheDocument();
    expect(screen.getByText("Zerodha")).toBeInTheDocument();

    const loginButton = screen.getByText("Login");

    const emailInput = screen.getByLabelText("Username or Email");

    const passInput = screen.getByLabelText("Password");

    fireEvent.change(emailInput, {
      target: {
        value: "admin@liquide.com",
      },
    });

    fireEvent.change(passInput, {
      target: {
        value: "liquide-pass",
      },
    });

    fireEvent.click(loginButton);

    const loadingButton = await screen.findByText("Logging in");

    expect(loadingButton).toBeInTheDocument();

    // Increase timeout for waitFor (e.g., 5 seconds)
    await waitFor(
      () => {
        const holdingsElement = screen.getByText("Holdings");
        if (!holdingsElement) {
          throw new Error("Holdings page not found");
        }
        expect(holdingsElement).toBeInTheDocument();
      },
      { timeout: 3500 }
    );
  });

  it("should show error for invalid creds", async () => {
    await waitFor(() => {}, { timeout: 2000 });

    const broker = await screen.findByAltText("Zerodha");
    fireEvent.click(broker);

    const usernameInput = screen.getByLabelText("Username or Email");
    const passwordInput = screen.getByLabelText("Password");

    fireEvent.change(usernameInput, { target: { value: "fake@liquide.com" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });

    fireEvent.click(screen.getByText("Login"));

    waitFor(
      () => {
        expect(screen.getByText("Failed to login!")).toBeInTheDocument();
      },
      { timeout: 3500 }
    );
  });
});
