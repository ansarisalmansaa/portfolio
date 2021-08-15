class User < ApplicationRecord
    has_many :projects, dependent: :delete_all
    has_secure_password
end
