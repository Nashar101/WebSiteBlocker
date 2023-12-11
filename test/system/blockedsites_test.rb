require "application_system_test_case"

class BlockedsitesTest < ApplicationSystemTestCase
  setup do
    @blockedsite = blockedsites(:one)
  end

  test "visiting the index" do
    visit blockedsites_url
    assert_selector "h1", text: "Blockedsites"
  end

  test "should create blockedsite" do
    visit blockedsites_url
    click_on "New blockedsite"

    fill_in "Days", with: @blockedsite.days
    fill_in "Duedate", with: @blockedsite.duedate
    fill_in "Durationtype", with: @blockedsite.durationtype
    fill_in "Hours", with: @blockedsite.hours
    fill_in "Link", with: @blockedsite.link
    fill_in "Minutes", with: @blockedsite.minutes
    fill_in "Seconds", with: @blockedsite.seconds
    click_on "Create Blockedsite"

    assert_text "Blockedsite was successfully created"
    click_on "Back"
  end

  test "should update Blockedsite" do
    visit blockedsite_url(@blockedsite)
    click_on "Edit this blockedsite", match: :first

    fill_in "Days", with: @blockedsite.days
    fill_in "Duedate", with: @blockedsite.duedate
    fill_in "Durationtype", with: @blockedsite.durationtype
    fill_in "Hours", with: @blockedsite.hours
    fill_in "Link", with: @blockedsite.link
    fill_in "Minutes", with: @blockedsite.minutes
    fill_in "Seconds", with: @blockedsite.seconds
    click_on "Update Blockedsite"

    assert_text "Blockedsite was successfully updated"
    click_on "Back"
  end

  test "should destroy Blockedsite" do
    visit blockedsite_url(@blockedsite)
    click_on "Destroy this blockedsite", match: :first

    assert_text "Blockedsite was successfully destroyed"
  end
end
