import { render } from "@testing-library/react"
import Index from "~/routes/index"

describe("Home", () => {
  it("should render the heading", () => {
    const { getByRole } = render(<Index />)

    const heading = getByRole("heading", {
      name: /Welcome to Remix/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
