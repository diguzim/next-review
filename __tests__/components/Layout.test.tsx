import React from 'react';
import Layout from "@/components/Layout";
import { render, screen } from "@testing-library/react";

describe('Layout', () => {
  it('renders the children', () => {
    const children = <div>Some Children</div>;
    render(<Layout>{children}</Layout>);
    const childrenElement = screen.getByText('Some Children');
    expect(childrenElement).toBeInTheDocument();
  });
});