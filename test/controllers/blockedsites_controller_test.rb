require "test_helper"

class BlockedsitesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @blockedsite = blockedsites(:one)
  end

  test "should get index" do
    get blockedsites_url
    assert_response :success
  end

  test "should get new" do
    get new_blockedsite_url
    assert_response :success
  end

  test "should create blockedsite" do
    assert_difference("Blockedsite.count") do
      post blockedsites_url, params: { blockedsite: { days: @blockedsite.days, duedate: @blockedsite.duedate, durationtype: @blockedsite.durationtype, hours: @blockedsite.hours, link: @blockedsite.link, minutes: @blockedsite.minutes, seconds: @blockedsite.seconds } }
    end

    assert_redirected_to blockedsite_url(Blockedsite.last)
  end

  test "should show blockedsite" do
    get blockedsite_url(@blockedsite)
    assert_response :success
  end

  test "should get edit" do
    get edit_blockedsite_url(@blockedsite)
    assert_response :success
  end

  test "should update blockedsite" do
    patch blockedsite_url(@blockedsite), params: { blockedsite: { days: @blockedsite.days, duedate: @blockedsite.duedate, durationtype: @blockedsite.durationtype, hours: @blockedsite.hours, link: @blockedsite.link, minutes: @blockedsite.minutes, seconds: @blockedsite.seconds } }
    assert_redirected_to blockedsite_url(@blockedsite)
  end

  test "should destroy blockedsite" do
    assert_difference("Blockedsite.count", -1) do
      delete blockedsite_url(@blockedsite)
    end

    assert_redirected_to blockedsites_url
  end
end
