# json.extract! @guest, :name, :age, :favorite_color
json.partial! "guest", guest: @guest

json.gifts do
  json.array! @gifts, :title, :description
end