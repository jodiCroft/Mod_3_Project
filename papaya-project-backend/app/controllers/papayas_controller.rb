class PapayasController < ApplicationController

    def index
        papayas = Papaya.all
        render json: papayas
    end

end
